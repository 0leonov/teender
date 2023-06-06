<?php

require_once 'validations.php';

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST');
header("Access-Control-Allow-Headers: Content-Type");

function insert($conn, $data)
{
    $username = $data['username'];
    $email = $data['email'];
    $password = $data['password'];

    if (usernameExists($conn, $username))
    {
        http_response_code(400);
        $response = json_encode(['error' => 'Username already taken']);
        echo $response;
        exit;
    }

    if (emailExists($conn, $email))
    {
        http_response_code(400);
        echo json_encode(['error' => 'Email already taken']);
        exit;
    }

    $sql = "INSERT INTO users(id, email, username, password) VALUES(null, :email, :username, :password)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);

    if ($stmt->execute())
    {
        http_response_code(201);
        echo json_encode(['message' => 'OK']);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Resource not found']);
    }
}
