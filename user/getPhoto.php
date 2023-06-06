<?php

function getPhoto($conn, $userId)
{
    $statement = $conn->prepare("SELECT photo FROM users WHERE id = ?");
    $statement->bindParam(1, $userId, PDO::PARAM_INT);
    $statement->execute();
    $photoData = $statement->fetch(PDO::FETCH_COLUMN);
    if (empty($photoData)) {
        return;
    }
    return base64_encode($photoData);
}
