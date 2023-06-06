<?php

require 'DbConnect.php';

require 'src/autoload.php';
require 'auth.php';
require 'functions.php';

autoloader();

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

if (empty($_GET['q'])) {
    http_response_code(400);
}

$q = $_GET['q'];
$params = explode('/', $q);

if (empty($params[1])) {
    http_response_code(400);
}

$type = $params[1];

switch ($method)
{
    case 'POST':

        $data = $_POST;
        if (empty($data)) {
            $data = json_decode(file_get_contents('php://input'), true);
        }

        if ($type == 'insert') {
            insert($conn, $data);
        }

        if ($type == 'login') {
            login($conn, $data);
        }

        if ($type == 'signOut') {
            check_access_token();
            sign_out(getAccessToken());
        }

        if ($type == 'update') {
            check_access_token();
            update($conn, getAccessToken(), $data);
        }

        if ($type == 'like') {
            check_access_token();
            like($conn, getAccessToken(), $data);
        }

        if ($type == 'ignore') {
            check_access_token();
            ignore($conn, getAccessToken(), $data);
        }
        break;

    case 'GET':

        if ($type == 'get') {
            check_access_token();
            get($conn, getAccessToken());
        }

        if ($type == 'getCouple') {
            check_access_token();
            getCouple($conn, getAccessToken());
        }

        if ($type == 'getDirect') {
            check_access_token();
            getDirect($conn, getAccessToken());
        }

        if ($type == 'getMatches') {
            check_access_token();
            getMatches($conn, getAccessToken());
        }

        break;


    default:
        http_response_code(400);
        echo json_encode(['error' => 'Wrong method']);
        break;
}

