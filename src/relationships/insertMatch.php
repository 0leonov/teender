<?php

function insertMatch($conn, $user1_id, $user2_id)
{
    $sql = "INSERT INTO matches (user1_id, user2_id, match_date) VALUES (:user1_id, :user2_id, NOW())";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':user1_id', $user1_id, PDO::PARAM_INT);
    $stmt->bindParam(':user2_id', $user2_id, PDO::PARAM_INT);
    $stmt->execute();
}