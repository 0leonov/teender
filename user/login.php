<?php

$allowedOrigins = array(
    'http://localhost:5173',
    'http://localhost:5173/login'
);

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
}

include 'validations.php';
include 'functions.php';
include '../auth/auth.php';
include '../DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user = json_decode(file_get_contents('php://input'));

    if (!usernameExists($conn, $user->username)) {
        $response = json_encode(['status' => 400, 'error' => 'Incorrect username and/or password']);
        echo $response;
        exit;
    }

    $sql = "SELECT * FROM users u WHERE u.username=:username && u.password=:password";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':username', $user->username);
    $stmt->bindParam(':password', $user->password);
    $stmt->execute();

    if(!!$stmt->fetch(PDO::FETCH_ASSOC)) {
        $user_id = get_id_by_username($conn, $user->username);
        [$token, $expires_in] = createAccessToken($user_id);
        $refresh_token = createRefreshToken($user_id);
        $response = json_encode(['accessToken' => $token]);
    } else {
        $response = json_encode(['error' => 'Incorrect username and/or password']);
    }
    echo $response;
}