FROM node:argon

RUN mkdir -p /usr/src/app

COPY app /usr/src/app/app

WORKDIR /usr/src/app

RUN npm install gulp -g

COPY package.json /usr/src/app/

RUN npm install

EXPOSE 3000
