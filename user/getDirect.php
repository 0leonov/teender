<?php

$allowedOrigins = array(
    'http://localhost:5173',
);

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: GET');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
}

function getDirect($conn, $accessToken) {
    $id = getUserIdFromToken($accessToken);

    $query = "SELECT from_user_id AS id FROM likes WHERE to_user_id = ? AND seen = 0 ORDER BY liked_at";
    $stmt = $conn->prepare($query);
    $stmt->bindValue(1, $id);
    $stmt->execute();

    $ids = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (!$ids) {
        return;
    }

    getUsersByIds($conn, $ids);
}