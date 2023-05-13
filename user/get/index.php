<?php

$allowedOrigins = array(
    'http://localhost:5173',
    'http://localhost:5173/profile'
);

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: GET');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
}


include '../../DbConnect.php';
include '../../auth/auth.php';

$db = new DbConnect;
$conn = $db->connect();

$accessToken = getAccessToken();
if ($accessToken == null) {
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

if($_SERVER['REQUEST_METHOD'] == 'GET')
{
    $sql = "SELECT name, description, age, sex, photo FROM users";

    if (empty($_GET)) 
    {
        $id = getUserIdFromToken($accessToken);
        $query = $sql . " WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':id', $id);

    } 
    else if (isset($_GET['id'])) 
    {
        $id = $_GET['id'];
        $query = $sql . " WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':id', $id);

    } 
    else if (isset($_GET['username'])) 
    {
        $username = $_GET['username'];
        $query = $sql . " WHERE username = :username";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':username', $username);

    }
    else {
        echo json_encode(array('error' => 'ID or username is not specified'));
        exit;
    }

    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode(array('error' => 'User not found'));
    }
}