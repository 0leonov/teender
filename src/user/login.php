<?php

require_once 'validations.php';

$allowedOrigins = array(
    'http://localhost:5173',
    'http://localhost:5173/login'
);

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST');
    header("Access-Control-Allow-Headers: Content-Type, Authorization ");
}

function login($conn, $data)
{
    $username = $data['username'];
    $password = $data['password'];

    if (!usernameExists($conn, $username))
    {
        http_response_code(403);
        echo json_encode(['error' => 'Incorrect username or password']);
        exit;
    }

    $sql = 'SELECT * FROM users u WHERE u.username=:username && u.password=:password';
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    $stmt->execute();

    if(!!$stmt->fetch(PDO::FETCH_ASSOC))
    {
        $user_id = get_id_by_username($conn, $username);
        $token = createAccessToken($user_id);
        createRefreshToken($user_id);
        $response = json_encode(['accessToken' => $token]);
    } else {
        http_response_code(403);
        $response = json_encode(['error' => 'Incorrect username or password']);
    }
    echo $response;
}

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