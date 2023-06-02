<?php

require_once 'getPhoto.php';

$allowedOrigins = array(
    'http://localhost:5173'
);

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: GET');
    header("Access-Control-Allow-Headers: Content-Type, Authorization ");
}


function get($conn, $accessToken)
{
    $sql = "SELECT username, name, description, age, sex FROM users";

    $id = getUserIdFromToken($accessToken);
    $query = $sql . " WHERE id = :id";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':id', $id);

    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    $photo = getPhoto($conn, $id);

    $result['photo'] = $photo;

    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode(array('error' => 'User not found'));
    }

}