<?php

require 'header.php';
require 'DbConnect.php';
require 'auth.php';
require 'functions.php';
require 'user/insert.php';
require 'user/login.php';
require 'user/signOut.php';
require 'user/update.php';

cors();

echo $_SERVER['HTTP_ORIGIN'];

/*$db = new DbConnect;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];

$q = $_GET['q'];
$params = explode('/', $q);
$type = $params[1];

switch ($method)
{
    case 'POST':

        if (!empty($_POST)) {
            $data = $_POST;
        } else {
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
        break;

    case 'GET':
        // Логика обработки GET запроса
        break;

    default:
        // Обработка неизвестного метода запроса
        break;
}
*/
