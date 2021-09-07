#!/bin/bash

DEPLOY_SERVER=$DEPLOY_SERVER
SERVER_FOLDER="makesense.to"

# Building React output
yarn install
yarn build

echo "Deploying to ${DEPLOY_SERVER}"
scp -r build/* ubuntu@${DEPLOY_SERVER}:/var/www/${SERVER_FOLDER}/

echo "Finished copying the build files"