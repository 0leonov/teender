<?php

include '../DbConnect.php';
include '../auth/auth.php';

$allowedOrigins = array(
    'http://localhost:5173',
    'http://localhost:5173/profile/edit'
);

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
}

$db = new DbConnect;
$conn = $db->connect();

$accessToken = getAccessToken();
if ($accessToken == null) {
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

$userId = getUserIdFromToken($accessToken);

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'));
    if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['error' => 'Error while decoding JSON: ' . json_last_error_msg()]);
    }

    $sql = 'UPDATE users SET';
    if (isset($data->name) && !empty($data->name))
    {
        $query = 'UPDATE users SET name = :name WHERE id = :id';
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':name', $data->name);
        $stmt->bindParam(':id', $userId);
        $stmt->execute();
    }
    if (isset($data->description) && !empty($data->description))
    {
        $query = $sql . " description = :description WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':description', $data->description);
        $stmt->bindParam(':id', $userId);
        $stmt->execute();
    }
    if (isset($data->age) && !empty($data->age))
    {
        $query = $sql . " age = :age WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':age', (int)$data->age);
        $stmt->bindParam(':id', $userId);
        $stmt->execute();
    }
    if (isset($data->sex) && !empty($data->sex))
    {
        $query = $sql . " sex = :sex WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':sex', $data->sex);
        $stmt->bindParam(':id', $userId);
        $stmt->execute();
    }
    /*
    if (isset($data->photo) && !empty($data->photo))
    {
        $query = $sql . " photo = :photo WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':photo', $data->photo);
        $stmt->bindParam(':id', $userId);
        $stmt->execute();
    }
    if (isset($data->password) && !empty($data->password))
    {
        $query = $sql . " password = :password WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':password', $data->password);
        $stmt->bindParam(':id', $userId);
        $stmt->execute();
    }
    */
    echo 'All good';
}