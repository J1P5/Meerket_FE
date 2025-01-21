#!/bin/sh
cd ../

# 상위 디렉토리 내용 확인
echo "Current directory after cd ../:"
ls -la

# output 디렉토리 생성
mkdir -p output
cp -R ./Meerket_FE/* ./output
cp -R ./Meerket_FE/.storybook ./output

cp -R ./output ./Meerket_FE/



