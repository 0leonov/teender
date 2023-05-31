<?php

function savePhoto($conn, $imageData)
{
    {
        $statement = $conn->prepare("INSERT INTO photos (image_data) VALUES (?)");

        $statement->bindParam(1, $imageData, PDO::PARAM_LOB);

        $statement->execute();

        if ($statement->rowCount() > 0) {
            http_response_code(200);
        } else {
            http_response_code(400);
            echo json_encode(["error" => "Failed to save the photo to the database"]);
        }
    }
}