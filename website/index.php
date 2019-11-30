<?php

$json = file_get_contents('product-service');
$obj = json_decode($json);

var_dump($obj);