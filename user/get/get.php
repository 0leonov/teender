<?php

function get_id_by_username($conn, $username) {
    $sql = "SELECT id FROM users WHERE username = :username";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':username', $username);

    $stmt->execute();
    if ($stmt->rowCount() > 0) {
        $id = $stmt->fetch(PDO::FETCH_ASSOC);
        return $id;
    } else {
        return null;
    }
}