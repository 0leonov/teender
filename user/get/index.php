<?php

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type, Authorization, application/json');

include '../../DbConnect.php';
include '../../auth/auth.php';

$db = new DbConnect;
$conn = $db->connect();

$accessToken = getAccessToken();
if ($accessToken == null) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

if($_SERVER['REQUEST_METHOD'] == 'GET')
{
    $sql = "SELECT name, description, age, sex, photo FROM users";

    if (empty($_GET)) {
        $id = getUserIdFromToken($accessToken);
        $query = $sql . "WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':id', $id);

    } else if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $query = $sql . "WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':id', $id);

    } else if (isset($_GET['username'])) {
        $username = $_GET['username'];
        $query = $sql . "WHERE username = :username";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':username', $username);

    } else {
        http_response_code(400);
        echo json_encode(array('error' => 'ID or username is not specified'));
        exit;
    }

    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result) {
        http_response_code(200);
        echo json_encode($result);
    } else {
        http_response_code(400);
        echo json_encode(array('error' => 'User not found'));
    }
}