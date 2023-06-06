<?php

function isLikeExists($conn, $from_user_id, $to_user_id): bool
{
    $query = "SELECT COUNT(*) FROM likes WHERE from_user_id = ? AND to_user_id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bindValue(1, $from_user_id);
    $stmt->bindValue(2, $to_user_id);
    $stmt->execute();
    $count = $stmt->fetchColumn();

    return ($count > 0);
}

function markLikeAsSeen($conn, $from_user_id, $to_user_id)
{
$query = "UPDATE likes SET seen = true WHERE from_user_id = ? AND to_user_id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bindValue(1, $from_user_id);
    $stmt->bindValue(2, $to_user_id);
    $stmt->execute();
}

function markLikeAsNotSeen($conn, $from_user_id, $to_user_id)
{
    $query = "UPDATE likes SET seen = false WHERE from_user_id = ? AND to_user_id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bindValue(1, $from_user_id);
    $stmt->bindValue(2, $to_user_id);
    $stmt->execute();
}