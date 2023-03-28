<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'DbConnect.php';
$db = new DbConnect;
$conn = $db->connect();

function usernameExists($conn, $username) {
    $sql = "SELECT * FROM users u WHERE u.username=:username;";
    $stmt = $conn->prepare($sql);
    $stmt->execute(array(':username' => $username));
    return !!$stmt->fetch(PDO::FETCH_ASSOC);
}

function emailExists($conn, $email) {
    $sql = "SELECT * FROM users u WHERE u.email=:email;";
    $stmt = $conn->prepare($sql);
    $stmt->execute(array(':email' => $email));
    return !!$stmt->fetch(PDO::FETCH_ASSOC);
}

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM users";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));

        if (usernameExists($conn, $user->username)) {
            $response = json_encode(['status' => 0, 'error' => 'Username already taken']);
            echo $response;
            break;
        }

        if (emailExists($conn, $user->email)) {
            $response = json_encode(['status' => 0, 'error' => 'Email already taken']);
            echo $response;
            break;
        }

        $sql = "INSERT INTO users(id, email, username, password) VALUES(null, :email, :username, :password)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':username', $user->username);
        $stmt->bindParam(':password', $user->password);
        if ($stmt->execute()) {
            $response = json_encode(['status' => 1]);
        } else {
            $response = json_encode(['status' => 0, 'error' => 'Something went wrong']);
        }
        echo $response;
        break;
}
