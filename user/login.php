<?php

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

include 'validations.php';
include 'get/functions.php';
include '../auth/auth.php';
include '../DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user = json_decode(file_get_contents('php://input'));

    if (!usernameExists($conn, $user->username)) {
        $response = json_encode(['status' => 400, 'error' => 'Username does not exist']);
        echo $response;
        exit;
    }

    $sql = "SELECT * FROM users u WHERE u.username=:username && u.password=:password";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':username', $user->username);
    $stmt->bindParam(':password', $user->password);
    $stmt->execute();

    if(!!$stmt->fetch(PDO::FETCH_ASSOC)) {
        $user_id = get_id_by_username($conn, $user->username);
        [$token, $expires_in] = createAccessToken($user_id);
        $refresh_token = createRefreshToken($user_id);
        http_response_code(200);
        $response = json_encode(['accessToken' => $token, 'user' => ['name' => $user->username]]);
    } else {
        http_response_code(400);
        $response = json_encode(['error' => 'Incorrect password']);
    }
    echo $response;
}