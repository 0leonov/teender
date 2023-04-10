<?php

include '../vendor/autoload.php';
include '../config.php';

use Firebase\JWT\JWT;

function createAccessToken($user_id) {

    $issued_at = time();
    $expires_at = $issued_at + 600; // Токен истекает через 10 минут
    $payload = array(
        "user_id" => $user_id,
        "iat" => $issued_at,
        "exp" => $expires_at
    );
    $access_token = JWT::encode($payload, Config::$JWT_key, 'HS512');

    return array(
        $access_token,
        $expires_at
    );
}

function createRefreshToken($user_id) {
    $issued_at = time();
    $expires_at = $issued_at + (3600 * 24); // Токен истекает через день
    $payload = array(
        "user_id" => $user_id,
        "iat" => $issued_at,
        "exp" => $expires_at
    );
    $refresh_token = JWT::encode($payload, Config::$JWT_key, 'HS512');

    saveRefreshToken($user_id, $refresh_token);
    return $refresh_token;
}

function saveRefreshToken($user_id, $refresh_token) {
    $db = new DbConnect;
    $conn = $db->connect();
    $stmt = $conn->prepare("INSERT INTO refresh_tokens (user_id, token) VALUES (:user_id, :token)");
    $stmt->bindParam(':user_id', $user_id);
    $stmt->bindParam(':token', $refresh_token);
    $stmt->execute();
}

function refreshAccessToken($refresh_token) {
    $decoded = JWT::decode($refresh_token, Config::$JWT_key);
    $user_id = $decoded->user_id;
    $saved_refresh_token = getRefreshToken($user_id);
    if ($refresh_token === $saved_refresh_token) {
        return createAccessToken($user_id);
    } else {
        return null; // Неверный refresh token
    }
}

function getRefreshToken($user_id) {
    $db = new DbConnect;
    $conn = $db->connect();
    $stmt = $conn->prepare("SELECT token FROM refresh_tokens WHERE user_id = :user_id");
    $stmt->bindParam(':user_id', $user_id);
    $stmt->execute();

    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function deleteRefreshToken($user_id) {
    $db = new DbConnect;
    $conn = $db->connect();
    $stmt = $conn->prepare("DELETE FROM refresh_tokens WHERE user_id = :user_id");
    $stmt->bindParam(':user_id', $user_id);
    $stmt->execute();
}