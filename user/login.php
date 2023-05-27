<?php

require_once 'validations.php';

function login($conn, $data)
{
    $username = $data['username'];
    $password = $data['password'];

    if (!usernameExists($conn, $username))
    {
        http_response_code(400);
        echo json_encode(['error' => 'Incorrect username and/or password']);
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
        http_response_code(400);
        $response = json_encode(['error' => 'Incorrect username and/or password']);
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