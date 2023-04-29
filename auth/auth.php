<?php

include '../vendor/autoload.php';
include '../config.php';

use Firebase\JWT\JWT;

function createAccessToken($userId): array
{
    $issued_at = time();
    $expires_at = $issued_at + 600; // Токен истекает через 10 минут
    $payload = array(
        "user_id" => $userId,
        "iat" => $issued_at,
        "exp" => $expires_at
    );
    $access_token = JWT::encode($payload, Config::$JWT_key, 'HS512');

    return array(
        $access_token,
        $expires_at
    );
}

function refreshAccessToken($refreshToken): ?array
{
    $decoded = decodeToken($refreshToken);
    $userId = $decoded->user_id;
    $expires_at = $decoded->exp;
    $savedRefreshToken = getRefreshToken($userId);
    if ($refreshToken === $savedRefreshToken and time() < $expires_at)
    {
        deleteRefreshToken($refreshToken);
        createRefreshToken($userId);
        return createAccessToken($userId);
    } else {
        return null;
    }
}

function decodeToken($token): stdClass
{
    return JWT::decode($token, Config::$JWT_key, 'HS512');
}

function createRefreshToken($userId): string
{
    $issued_at = time();
    $expires_at = $issued_at + (3600 * 24); // Токен истекает через день
    $payload = array(
        "user_id" => $userId,
        "iat" => $issued_at,
        "exp" => $expires_at
    );
    $refreshToken = JWT::encode($payload, Config::$JWT_key, 'HS512');
    setcookie('refresh_token', $refreshToken, time() + 3600 * 24, '/', '', true, true);
    saveRefreshToken($userId, $refreshToken);
    return $refreshToken;
}

function saveRefreshToken($user_id, $refresh_token)
{
    $db = new DbConnect;
    $conn = $db->connect();
    $stmt = $conn->prepare('INSERT INTO refresh_tokens (user_id, token) VALUES (:user_id, :token)');
    $stmt->bindParam(':user_id', $user_id);
    $stmt->bindParam(':token', $refresh_token);
    $stmt->execute();
}

function getRefreshToken($user_id)
{
    $db = new DbConnect;
    $conn = $db->connect();
    $stmt = $conn->prepare("SELECT token FROM refresh_tokens WHERE user_id = :user_id");
    $stmt->bindParam(':user_id', $user_id);
    $stmt->execute();

    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function deleteRefreshToken($refresh_token)
{
    $db = new DbConnect;
    $conn = $db->connect();
    $stmt = $conn->prepare("DELETE FROM refresh_tokens WHERE token = :refresh_token");
    $stmt->bindParam(':refresh_token', $refresh_token);
    $stmt->execute();
}

function getAccessToken()
{
    $headers = getallheaders();
    $authorizationHeader = $headers['Authorization'] ?? '';
    if (!preg_match('/Bearer\s(\S+)/', $authorizationHeader, $matches)) {
        return null;
    }
    $accessToken = substr($matches[0], 7, null) ;
    $decoded = decodeToken($accessToken);
    $expires_at = $decoded->exp;
    if ($expires_at < time())
    {
        $accessToken = refreshAccessToken($_COOKIE['refresh_token']);
        if ($accessToken == null) {
            return null;
        }
    }
    return $accessToken;
}