FROM node:20.10.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./dist ./src

EXPOSE 3000

CMD ["node", "src/server.js"]

