<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'validations.php';
include '../DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $user = json_decode(file_get_contents('php://input'));

        if (usernameExists($conn, $user->username)) {
            $response = json_encode(['status' => 0, 'error' => 'Username already taken']);
            echo $response;
            break;
        }

        if (emailExists($conn, $user->email)) {
            $response = json_encode(['status' => 0, 'error' => 'Email already taken']);
            echo $response;
            break;
        }

        $sql = "INSERT INTO users(id, email, username, password) VALUES(null, :email, :username, :password)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':username', $user->username);
        $stmt->bindParam(':password', $user->password);
        if ($stmt->execute()) {
            $response = json_encode(['status' => 200]);
        } else {
            $response = json_encode(['status' => 0, 'error' => 'Something went wrong']);
        }
        echo $response;
        break;
}
