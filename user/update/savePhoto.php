<?php

include '../../DbConnect.php';

function savePhoto($imageData): bool
{
    $db = new DbConnect;
    $conn = $db->connect();

    $stmt = $conn->prepare("INSERT INTO photos (photo_data) VALUES (?)");
    $stmt->bind_param("b", $imageData);

    if ($stmt->execute() === false) {
        return false;
    } else {
        return true;
    }
}
