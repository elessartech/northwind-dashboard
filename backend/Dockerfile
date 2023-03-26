FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm install -g ts-node

ENV DATABASE_URL=./db/northwind.db

ENV PORT=3001

CMD ["npm", "start"]