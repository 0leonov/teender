<?php

include 'vendor\autoload.php';
include 'config.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function createAccessToken($userId): string
{
    $issued_at = time();
    $expires_at = $issued_at + 12 * 60 * 60; // Токен истекает через 12h
    $payload = array(
        "user_id" => $userId,
        "iat" => $issued_at,
        "exp" => $expires_at
    );

    return JWT::encode($payload, Config::$JWT_key, 'HS512');
}

function createRefreshToken($userId)
{
    $issued_at = time();
    $expires_at = $issued_at + 3600 * 24 * 30; // Токен истекает через 30 дней
    $payload = array(
        "user_id" => $userId,
        "iat" => $issued_at,
        "exp" => $expires_at
    );

    $refreshToken = JWT::encode($payload, Config::$JWT_key, 'HS512');
    setcookie('refresh_token', $refreshToken, time() +3600 * 24 * 30, '/', '', true, true);
    saveRefreshToken($userId, $refreshToken);
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

function refreshAccessToken($refreshToken): ?string
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

function decodeToken($token): ?stdClass
{
    try {
        return JWT::decode($token, new Key(Config::$JWT_key, 'HS512'));
    }
    catch (Firebase\JWT\ExpiredException $e) {
        return null;
    }
}

function getRefreshToken($user_id)
{
    $db = new DbConnect;
    $conn = $db->connect();
    $stmt = $conn->prepare("SELECT token FROM refresh_tokens WHERE user_id = :user_id");
    $stmt->bindParam(':user_id', $user_id);
    $stmt->execute();

    return $stmt->fetch(PDO::FETCH_ASSOC)['token'];
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

    if ($decoded == null)
    {
        $accessToken = refreshAccessToken($_COOKIE['refresh_token']);
        if ($accessToken == null) {
            return null;
        }
    }

    $expires_at = $decoded->exp;
    if (time() > $expires_at)
    {
        $accessToken = refreshAccessToken($_COOKIE['refresh_token']);
        if ($accessToken == null) {
            return null;
        }
    }
    return $accessToken;
}

function getUserIdFromToken($token) {
    $decoded = decodeToken($token);
    return $decoded->user_id;
}