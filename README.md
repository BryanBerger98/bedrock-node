# Bedrock Node

Bedrock Node is a NodeJS application allowing to start a new Node project from a healthy and operational base.

## Get the project

Follow these steps to get the project on your computer:

<br>

Clone the repository:
```bash
git clone git@github.com:BryanBerger98/bedrock-node.git
```
Go inside the project directory:
```bash
cd bedrock-node
```
Install dependences:
```bash
npm install
```
Set up your env variables inside a `.env` file:
```dosini
PORT= #PORT OF NODE JS APPLICATION
MONGODB_URI= #URI OF YOUR MONGO DB SERVER
JWT_SECRET= #SIGNATURE OF YOUR JWTs
EMAIL_HOST= #HOST OF YOUR SMTP CONFIG
EMAIL_PORT= #PORT OF YOUR SMTP CONFIG (2525, 587, ...)
EMAIL_USER= #USER (email address) of your SMTP CONFIG
EMAIL_PASS= #PASSWORD OF YOUR SMTP CONFIG
FRONT_URL= #URL OF YOUR FRONTEND APPLICATION
```

Run the server:
```bash
node index.js
```

## Development server

Run `node` for a dev server. The API url is `http://localhost:3000/`.

## Documentation

[Go to docs](https://github.com/BryanBerger98/bedrock-node/wiki)