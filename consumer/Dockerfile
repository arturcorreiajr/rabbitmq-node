FROM node:lts
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install
RUN npm install amqplib && npm i express && npm i body-parser

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD [ "node", "server.js" ]