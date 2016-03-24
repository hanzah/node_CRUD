FROM node:argon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install gulp -g

COPY package.json /usr/src/app/
RUN npm install

EXPOSE 3000
