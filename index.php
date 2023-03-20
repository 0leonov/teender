<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO users(id, email, username, password) VALUES(null, :email, :username, :password)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':username', $user->username);
        $stmt->bindParam(':password', $user->password);
        if ($stmt->execute()) {
            $response = json_encode(['status' => 1, 'massage' => 'Record created successfully.']);
        } else {
            $response = json_encode(['status' => 0, 'massage' => 'Failed.']);
        }
        echo $response;
        break;
}