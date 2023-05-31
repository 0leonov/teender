<?php

function get($conn, $accessToken)
{
    $sql = "SELECT username, name, description, age, sex, photo FROM users";

    $id = getUserIdFromToken($accessToken);
    $query = $sql . " WHERE id = :id";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':id', $id);

    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode(array('error' => 'User not found'));
    }
}