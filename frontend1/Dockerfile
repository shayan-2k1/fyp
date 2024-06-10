FROM node:latest

WORKDIR /frontend

COPY yarn.lock ./

RUN yarn

COPY . .

CMD ["yarn","run","start"]