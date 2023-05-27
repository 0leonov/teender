<?php

function check_access_token() {
    if (getAccessToken() == null) {
        http_response_code(401);
        echo json_encode(['error' => 'Unauthorized']);
        exit;
    }
}