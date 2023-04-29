<?php

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

include '../DbConnect.php';
include '../auth/auth.php';

$db = new DbConnect;
$conn = $db->connect();

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (getAccessToken() == null) {
        http_response_code(401);
        echo json_encode(['error' => 'Unauthorized']);
        exit;
    }
    deleteRefreshToken($_COOKIE['refresh_token']);
    setcookie('refresh_token', '', time() - 3600);
}