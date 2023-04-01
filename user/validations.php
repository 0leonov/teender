<?php

function usernameExists($conn, $username) {
    $sql = "SELECT * FROM users u WHERE u.username=:username;";
    $stmt = $conn->prepare($sql);
    $stmt->execute(array(':username' => $username));
    return !!$stmt->fetch(PDO::FETCH_ASSOC);
}

function emailExists($conn, $email) {
    $sql = "SELECT * FROM users u WHERE u.email=:email;";
    $stmt = $conn->prepare($sql);
    $stmt->execute(array(':email' => $email));
    return !!$stmt->fetch(PDO::FETCH_ASSOC);
}
