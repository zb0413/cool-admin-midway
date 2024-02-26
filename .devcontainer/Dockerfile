FROM node:18.18.2-buster-slim

# 设置时区为中国东八区，这里的配置可以被docker-compose.yml或docker run时指定的时区覆盖
ENV TZ="Asia/Shanghai"

RUN yarn config set registry https://registry.npmmirror.com

EXPOSE 8001