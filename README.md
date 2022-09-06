## Como subir os serviços

### Para subir o rabbitMQ
```console
docker-compose up -d
```
Acesse no browser
```console
http://localhost:15672/
```
user: guest e password: guest


### Para subir o serviço Producer

Acesse o diretório producer
```console
cd producer
```
Instale as dependências
```console
npm instal amqplib && npm i express && npm i body-parser
```
Rode a aplicação
```console
node server.js
```
Use o postman e faça um POST na URL
```console
localhost:3000/sendLog
```
json
```console
{"logType":"info","message":"Download Successful"}
```
