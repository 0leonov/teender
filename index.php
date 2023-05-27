<?php

require 'DbConnect.php';
require 'auth.php';
require 'functions.php';
require 'user/insert.php';
require 'user/login.php';
require 'user/signOut.php';
require 'user/update.php';

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET');
header("Access-Control-Allow-Headers: Authorization, Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: http://localhost:5173');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    header('Access-Control-Allow-Credentials: true');
    exit();
}

$db = new DbConnect;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];

$q = $_GET['q'];
$params = explode('/', $q);

if (empty($params[1])) {
    http_response_code(400);
}

$type = $params[1];

switch ($method)
{
    case 'POST':

        if ($type == 'insert') {
            $data = json_decode(file_get_contents('php://input'), true);
            insert($conn, $data);
        }

        if ($type == 'login') {
            $data = json_decode(file_get_contents('php://input'), true);
            login($conn, $data);
        }

        if ($type == 'signOut') {
            check_access_token();
            sign_out(getAccessToken());
        }

        if ($type == 'update') {
            $data = $_POST;
            check_access_token();
            update($conn, getAccessToken(), $data);
        }
        break;

    case 'GET':
        // Логика обработки GET запроса
        break;

    default:
        // Обработка неизвестного метода запроса
        break;
}

