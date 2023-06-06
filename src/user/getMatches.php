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

function getMatches($conn, $accessToken) {
    $id = getUserIdFromToken($accessToken);

    $query = "SELECT 
                CASE
                    WHEN user1_id = :user_id THEN user2_id
                    WHEN user2_id = :user_id THEN user1_id
                END AS id
            FROM matches
            WHERE user1_id = :user_id OR user2_id = :user_id
            ORDER BY match_date DESC";

    $stmt = $conn->prepare($query);
    $stmt->bindValue(':user_id', $id);
    $stmt->execute();

    $ids = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (!$ids) {
        return;
    }

    getUsersByIds($conn, $ids);
}