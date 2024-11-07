#!/bin/sh

export MONGO_URI=localhost:27017
export MILVUS_URI=http://localhost:19530
export MINIO_URI=localhost:9000

export PORT=8081 && export USE_SECURE=no && export ENV=pro
export MONGO_USR=user && export MONGO_PASS=pass
export MINIO_ACCESS_KEY=G3Ms1HAFz9Y5bXVInUyg && export MINIO_SECRET_KEY=Ji0MkkQcQiip1apqJKiodnB03pnLL869aXnsqkiY
export WORKSPACE=/home/ejfdelgado/desarrollo/ejflab-playground
export FACE_SERVER=http://localhost:8082/
export GOOGLE_APPLICATION_CREDENTIALS=/home/ejfdelgado/desarrollo/ejflab-playground/credentials/ejfexperiments-c2ef2a890ca5.json
export TRAIN_SERVER=https://imagiation-7b6hvjg6ia-uc.a.run.app/
export POSTGRES_HOST=postgres
export POSTGRES_PORT=5432
export POSTGRES_DB=widesight
export POSTGRES_USER=user
export POSTGRES_PASSWORD=pass
export NODE_SERVER_PATH=/

node ./node_modules/@ejfdelgado/ejflab-common/src/changePath.js

npm run start