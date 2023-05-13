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

    if (usernameExists($conn, $user->username)) {
        $response = json_encode(['error' => 'Username already taken']);
        echo $response;
        exit;
    }

    if (emailExists($conn, $user->email)) {
        $response = json_encode(['error' => 'Email already taken']);
        echo $response;
        exit;
    }

    $sql = "INSERT INTO users(id, email, username, password) VALUES(null, :email, :username, :password)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $user->email);
    $stmt->bindParam(':username', $user->username);
    $stmt->bindParam(':password', $user->password);
    if ($stmt->execute()) {
        $user_id = get_id_by_username($conn, $user->username);
    } else {
        echo json_encode(['error' => 'Resource not found']);
    }
}
