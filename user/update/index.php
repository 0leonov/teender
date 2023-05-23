<?php

include '../../DbConnect.php';
include '../../auth/auth.php';

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

    $sql = 'UPDATE users SET';
    if (!empty($_POST['name']))
    {
        $query = 'UPDATE users SET name = :name WHERE id = :id';
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':name', $_POST['name']);
        $stmt->bindParam(':id', $userId);
        $stmt->execute();
    }
    if (!empty($_POST['description']))
    {
        $query = $sql . " description = :description WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':description', $_POST['description']);
        $stmt->bindParam(':id', $userId);
        $stmt->execute();
    }
    if (!empty($_POST['age']))
    {
        $age = (int)$_POST['age'];
        if ($age < 14 or $age > 100) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid age']);
        }
        $query = $sql . " age = :age WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':age', $age);
        $stmt->bindParam(':id', $userId);
        $stmt->execute();
    }
    if (!empty($_POST['sex'] and $_POST['sex'] != 'null' ))
    {
        $query = $sql . " sex = :sex WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':sex', $_POST['sex']);
        $stmt->bindParam(':id', $userId);
        $stmt->execute();
    }
    if (!empty($_POST['photo']))
    {
        if (isset($_FILES["photo"]) && $_FILES["photo"]["error"] == UPLOAD_ERR_OK) {
            $fileTmpPath = $_FILES["photo"]["tmp_name"];
            $imageData = file_get_contents($fileTmpPath);
            if (!savePhoto($imageData)) {
                http_response_code(400);
                echo json_encode(['error' => 'Error inserting photo']);
            }
            unlink($fileTmpPath);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'File download error']);
        }
    }
    echo 'OK';
}