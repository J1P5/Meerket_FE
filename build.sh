#!/bin/sh
cd ../

# 상위 디렉토리 내용 확인
echo "Current directory after cd ../:"
ls -la

# output 디렉토리 생성
mkdir -p output
cp -R ./WEB1_1_J1P5_FE/* ./output
cp -R ./WEB1_1_J1P5_FE/.storybook ./output

cp -R ./output ./WEB1_1_J1P5_FE/



