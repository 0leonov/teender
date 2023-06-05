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

function ignore($conn, $accessToken, $data)
{
    if (empty($data['id']))
    {
        http_response_code(400);
    }

    $from_user_id = $data['id'];
    $to_user_id = getUserIdFromToken($accessToken);

    if (!isLikeExists($conn, $from_user_id, $to_user_id)) {
        exit;
    }
    else {
        markLikeAsSeen($conn, $from_user_id, $to_user_id);
    }
}