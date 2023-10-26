#!/bin/bash

# 환경변수 초기화
source /home/ec2-user/env.sh

# ECR 로그인 후 신규 이미지 PULL
aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com
docker pull $FRONT_ECR_URL

# 기존 컨테이너 삭제 후 신규 컨테이너 생성
check_front=$(docker ps -a | grep front)
if [ $(echo $check_front | awk '{print length($0)}') != 0 ]; then
docker rm -f front
fi

docker create -i --name front -p $FRONT_PORT:$FRONT_PORT $FRONT_ECR_URL
docker start front

# 기존 이미지 삭제
DELETE_TAG=$(docker images | egrep -v "SIZE|$TAG" | awk -F ' ' '{print $2}')
docker image rm $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$FRONT_ECR_NAME:$DELETE_TAG