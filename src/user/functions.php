<?php

function getUsersByIds($conn, $userIds) {
    $placeholders = implode(',', array_fill(0, count($userIds), '?'));

    $query = "SELECT id, name, description, age, sex FROM users WHERE id IN ($placeholders)";
    $stmt = $conn->prepare($query);

    foreach ($userIds as $index => $userId) {
        $stmt->bindValue($index + 1, $userId['id']);
    }

    $stmt->execute();

    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (!$users) {
        http_response_code(404);
        echo 'Not found';
    }

    foreach ($users as &$user)
    {
        $photo = getPhoto($conn, $user['id']);
        if (!empty($photo)) {
            $user['photo'] = $photo;
        }
    }

    echo json_encode($users);
}