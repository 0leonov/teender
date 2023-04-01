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

        if (!usernameExists($conn, $user->username)) {
            $response = json_encode(['status' => 0, 'error' => 'Username does not exist']);
            echo $response;
            break;
        }

        $sql = "SELECT * FROM users u WHERE u.username=:username && u.password=:password";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':username', $user->username);
        $stmt->bindParam(':password', $user->password);
        $stmt->execute();

        if(!!$stmt->fetch(PDO::FETCH_ASSOC)) {
            $response = json_encode(['status' => 200]);
        } else {
            $response = json_encode(['status' => 0, 'error' => 'Incorrect password']);
        }
        echo $response;
        
        break;
}