#!/bin/bash

timeout 1 ping -c 1 $1 > /dev/null

if [ $? -eq  0 ]; then
    echo "ping success";
    exit 0
else
    echo "fail ping"
    exit 1
fi