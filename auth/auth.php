<?php

include '../vendor/autoload.php';
include '../config.php';

use Firebase\JWT\JWT;

function createToken($username) {
    $iat = time();
    $expires_in = $iat + 10*60;    // +10 min
    $payload = [
        'iss' => 'http://localhost:80/api',
        'aud' => 'http://localhost:3000/',
        'exp' => $expires_in,
        'username' => $username
    ];
    
    $jwt = JWT::encode($payload, Config::$JWT_key, 'HS512');

    return array(
        $jwt,
        $expires_in
    );
}