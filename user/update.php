<?php

require_once 'savePhoto.php';

function update($conn, $accessToken, $data)
{

    $userId = getUserIdFromToken($accessToken);

    if (isset($data['name']))
    {
        update_name($conn, $userId, $data['name']);
    }

    if (isset($data['description']))
    {
        update_description($conn, $userId, $data['description']);
    }

    if (isset($data['age']))
    {
        update_age($conn, $userId, $data['age']);
    }

    if (isset($data['sex']))
    {
        update_sex($conn, $userId, $data['sex']);
    }

    if (isset($_FILES["photo"]))
    {
        update_photo($conn, $userId);
    }

    echo json_encode(['message' => 'OK']);
}

function update_name($conn, $id, $name)
{
    $query = 'UPDATE users SET name = :name WHERE id = :id';
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
}

function update_description($conn, $id, $description)
{
    $query = 'UPDATE users SET description = :description WHERE id = :id';
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
}

function update_age($conn, $id, $age)
{
    if ($age < 14 or $age > 100) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid age']);
        exit;
    }
    $query = 'UPDATE users SET age = :age WHERE id = :id';
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':age', $age);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
}

function update_sex($conn, $id, $sex)
{
    $sexes_array = ['male', 'female'];
    if (!in_array($sex, $sexes_array)) {
        return;
    }

    $query = 'UPDATE users SET sex = :sex WHERE id = :id';
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':sex', $sex);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
}

function update_photo($conn, $id) {
    upload_photo($conn);
    $photoId = $conn->lastInsertId();
    $query = 'UPDATE users SET photo = :photo WHERE id = :id';
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':photo', $photoId);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
}

function upload_photo($conn) {
    if ($_FILES["photo"]["error"] == UPLOAD_ERR_OK) {
        $fileTmpPath = $_FILES["photo"]["tmp_name"];
        $imageData = file_get_contents($fileTmpPath);
        savePhoto($conn, $imageData);
        unlink($fileTmpPath);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'File download error']);
    }
}