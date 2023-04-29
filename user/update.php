<?php

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$db = new DbConnect;
$conn = $db->connect();

$accessToken = getAccessToken();
if ($accessToken == null) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}
$decoded = decodeToken($accessToken);
$userId = $decoded->user_id;

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(['error' => 'Error while decoding JSON: ' . json_last_error_msg()]);
    }

    $sql = "UPDATE users SET";
    if (isset($data->name)) {
        $query = $sql . " name = :name WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':name', $data->name);
        $stmt->bindParam(':id', $userId);
        $stmt->execute();
    }
    if (isset($data->description)) {
        $query = $sql . " description = :description WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':description', $data->description);
        $stmt->bindParam(':id', $userId);
        $stmt->execute();
    }
    if (isset($data->age)) {
        $query = $sql . " age = :age WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':age', $data->age);
        $stmt->bindParam(':id', $userId);
        $stmt->execute();
    }
    if (isset($data->sex)) {
        $query = $sql . " sex = :sex WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':sex', $data->sex);
        $stmt->bindParam(':id', $userId);
        $stmt->execute();
    }
    if (isset($data->photo)) {
        $query = $sql . " photo = :photo WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':photo', $data->photo);
        $stmt->bindParam(':id', $userId);
        $stmt->execute();
    }
    if (isset($data->password)) {
        $query = $sql . " password = :password WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':password', $data->password);
        $stmt->bindParam(':id', $userId);
        $stmt->execute();
    }
}