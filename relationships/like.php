<?php

$allowedOrigins = array(
    'http://localhost:5173',
);

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST');
    header("Access-Control-Allow-Headers: Content-Type, Authorization ");
}

require_once 'functions.php';

function like($conn, $accessToken, $data)
{
    if (empty($data['id']))
    {
        http_response_code(400);
    }

    $from_user_id = getUserIdFromToken($accessToken);
    $to_user_id = $data['id'];
    $seen = 0;
    $liked_at = date("Y-m-d H:i:s");

    if (isLikeExists($conn, $from_user_id, $to_user_id)) {
        exit;
    }

    $query = "INSERT INTO likes (from_user_id, to_user_id, seen, liked_at) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($query);

    $stmt->bindValue(1, $from_user_id);
    $stmt->bindValue(2, $to_user_id);
    $stmt->bindValue(3, $seen);
    $stmt->bindValue(4, $liked_at);

    if ($stmt->execute())
    {
        $reverse_query = "SELECT COUNT(*) FROM likes WHERE from_user_id = ? AND to_user_id = ?";
        $reverse_stmt = $conn->prepare($reverse_query);
        $reverse_stmt->bindValue(1, $to_user_id);
        $reverse_stmt->bindValue(2, $from_user_id);
        $reverse_stmt->execute();
        $count = $reverse_stmt->fetchColumn();

        if ($count > 0)
        {
            // Match!
            markLikeAsSeen($conn, $from_user_id, $to_user_id);
            markLikeAsSeen($conn, $to_user_id, $from_user_id);
            echo "Match!";
        }
        else
        {
            http_response_code(201);
            echo json_encode(['message' => 'OK']);
        }
    }
    else
    {
        http_response_code(404);
        echo json_encode(['error' => 'Resource not found']);
    }
}
