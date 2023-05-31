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

function getCouple($conn, $accessToken) {
    $userId = getUserIdFromToken($accessToken);
    if(isUserMale($conn, $userId)) {
        $woman = getRandomWoman($conn);
        if($woman) {
            echo json_encode($woman);
        } else {
            echo 'Woman not found';
        }
    }
    else {
        $man = getRandomMan($conn);
        if($man) {
            echo json_encode($man);
        } else {
            echo 'Man not found';
        }
    }
}

function isUserMale($conn, $userId): bool
{
    $query = "SELECT sex FROM users WHERE id = :userId";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':userId', $userId);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result && $result['sex'] === 'male') {
        return true;
    }
    return false;
}

function getRandomWoman($conn)
{
    $query = "SELECT id, name, description, age, photo FROM users WHERE sex = 'female' ORDER BY RAND() LIMIT 1";

    $result = $conn->query($query);

    return $result->fetch(PDO::FETCH_ASSOC);
}

function getRandomMan($conn)
{
    $query = "SELECT id, name, description, age, photo FROM users WHERE sex = 'male' ORDER BY RAND() LIMIT 1";

    $result = $conn->query($query);

    return $result->fetch(PDO::FETCH_ASSOC);
}
