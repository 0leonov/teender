<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'validations.php';
include 'get/get.php';
include '../auth/auth.php';
include '../DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user = json_decode(file_get_contents('php://input'));

    if (usernameExists($conn, $user->username)) {
        $response = json_encode(['status' => 400, 'error' => 'Username already taken']);
        echo $response;
        die();
    }

    if (emailExists($conn, $user->email)) {
        $response = json_encode(['status' => 400, 'error' => 'Email already taken']);
        echo $response;
        die();
    }

    $sql = "INSERT INTO users(id, email, username, password) VALUES(null, :email, :username, :password)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $user->email);
    $stmt->bindParam(':username', $user->username);
    $stmt->bindParam(':password', $user->password);
    if ($stmt->execute()) {
        $user_id = get_id_by_username($conn, $user->username);
        [$token, $expires_in] = createAccessToken($user_id);
        $refresh_token = createRefreshToken($user_id);
        $response = json_encode(['status' => 200, 'accessToken' => $token, 'expires_in' => $expires_in, 'refreshToken' => $refresh_token]);
    } else {
        $response = json_encode(['status' => 404, 'error' => 'Resource not found']);
    }
    echo $response;
}
