FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN yarn

RUN yarn add global ts-node

ENV DATABASE_URL=./db/northwind.db

ENV PORT=3001

CMD ["yarn", "start"]