FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN yarn

RUN yarn run build

RUN yarn add global serve

ENV REACT_APP_BACKEND_URL=http://localhost:3001/api

CMD ["serve", "build"]