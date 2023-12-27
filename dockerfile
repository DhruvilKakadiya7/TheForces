FROM node:20.4.0

COPY . /app

WORKDIR /app

CMD npm start