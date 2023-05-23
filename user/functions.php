<?php

function get_id_by_username($conn, $username) {
    $sql = "SELECT id FROM users WHERE username = :username";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':username', $username);

    $stmt->execute();
    if ($stmt->rowCount() > 0) {
        return $stmt->fetch(PDO::FETCH_ASSOC)['id'];
    } else {
        return null;
    }
}
