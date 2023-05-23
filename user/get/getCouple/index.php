<?php

$allowedOrigins = array(
    'http://localhost:5173',
    'http://localhost:5173/',
);

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: GET');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
}

include '../../../auth/auth.php';
include 'functions.php';

$accessToken = getAccessToken();
if ($accessToken == null) {
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

if($_SERVER['REQUEST_METHOD'] == 'GET')
{
    $userId = getUserIdFromToken($accessToken);
    if(isUserMale($userId)) {
        $woman = getRandomWoman();
        if($woman) {
            echo json_encode($woman);
        } else {
            echo 'Woman not found';
        }
    }
    else {
        $man = getRandomWoman();
        if($man) {
            echo json_encode($man);
        } else {
            echo 'Man not found';
        }
    }
}