FROM node:12-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
COPY . ./
EXPOSE 5984
CMD  [ "npm", "start" ]