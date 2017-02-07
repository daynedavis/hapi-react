From node:boron

#Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install
RUN npm install -g forever

COPY . /usr/src/app

ENV NODE_ENV=dev
EXPOSE 8080 3000

RUN forever start './src/server/server.js'
CMD [ "npm", "start" ]
