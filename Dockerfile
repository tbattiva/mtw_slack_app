FROM alpine:3.17

ENV NODE_VERSION 20.7.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

COPY . ./
EXPOSE 3000
CMD ["node", "index.js"]