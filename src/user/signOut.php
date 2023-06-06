<?php

function sign_out($access_token)
{
    $user_id = getUserIdFromToken($access_token);
    $refresh_token_to_delete = getRefreshToken($user_id);
    deleteRefreshToken($refresh_token_to_delete);
    setcookie('refresh_token', '', time() - 3600);
    echo json_encode(['message' => 'OK']);
}