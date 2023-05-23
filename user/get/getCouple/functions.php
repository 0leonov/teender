<?php

include '../../../DbConnect.php';

function isUserMale($userId): bool
{
    $db = new DbConnect;
    $conn = $db->connect();
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

function getRandomWoman()
{
    $db = new DbConnect;
    $conn = $db->connect();
    $query = "SELECT id, name, description, age, photo FROM users WHERE sex = 'female' ORDER BY RAND() LIMIT 1";
    
    $result = $conn->query($query);

    return $result->fetch(PDO::FETCH_ASSOC);
}

function getRandomMan()
{
    $db = new DbConnect;
    $conn = $db->connect();
    $query = "SELECT id, name, description, age, photo FROM users WHERE sex = 'male' ORDER BY RAND() LIMIT 1";
    $result = $conn->query($query);

    return $result->fetch(PDO::FETCH_ASSOC);
}
