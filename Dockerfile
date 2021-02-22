FROM node:15-alpine

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install --production --silent && mv node_modules ../

COPY . .

EXPOSE 3000

RUN npm install -g nodemon
RUN npm install -g typescript
RUN npm install -g ts-node

CMD npm start
