<?php

function savePhoto($conn, $imageData, $userId)
{
    $statement = $conn->prepare("UPDATE users SET photo = ? WHERE id = ?");
    $statement->bindParam(1, $imageData, PDO::PARAM_LOB);
    $statement->bindParam(2, $userId, PDO::PARAM_INT);
    $statement->execute();
    if ($statement->rowCount() > 0) {
        http_response_code(200);
    } else {
        http_response_code(400);
        echo json_encode(["error" => "Failed to save the photo to the database"]);
    }
}