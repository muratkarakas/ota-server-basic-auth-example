#!/bin/bash

npm i

docker build -t com.eteraiton.ota:latest  .


docker-compose up