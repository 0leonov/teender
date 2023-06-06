<?php

function autoloader()
{
    $currentDir = dirname(__FILE__);

    $directories = [
        'user',
        'relationships'
    ];

    foreach ($directories as $directory) {
        $path = sprintf('%s/%s/', $currentDir, $directory);
        $files = glob($path . '*.php');

        foreach ($files as $file) {
            require_once($file);
        }
    }
}