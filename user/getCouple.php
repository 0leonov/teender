<?php

$allowedOrigins = array(
    'http://localhost:5173',
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

    if(isUserMale($conn, $userId))
    {
        getRandomUser($conn, 'female');
    }
    else
    {
        getRandomUser($conn, 'male');
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

function getRandomUser($conn, $sex)
{
    $query = "SELECT id, name, description, age
            FROM users
            WHERE sex = :sex
            AND name IS NOT NULL
            AND description IS NOT NULL
            AND age IS NOT NULL
            AND photo IS NOT NULL
            ORDER BY RAND() LIMIT 1";

    $stmt = $conn->prepare($query);
    $stmt->bindParam(':sex', $sex);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$result) {
        http_response_code(404);
        return 'Not found';
    }

    $photo = getPhoto($conn, $result['id']);
    if (!empty($photo)) {
        $result['photo'] = $photo;
    }

    echo json_encode($result);
}
