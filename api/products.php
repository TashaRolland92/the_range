<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Simulates a slow backend call — remove for production
usleep(800000);

$dataPath = __DIR__ . '/../data/products.json';
$json = file_get_contents($dataPath);

echo $json;
