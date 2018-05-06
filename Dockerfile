FROM node:latest

COPY . /code/
WORKDIR /code/

RUN npm install -g eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
