FROM node:7.7

WORKDIR /tmp
COPY package.json /tmp/
RUN npm install
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

ENV NODE_ENV=dev
EXPOSE 8080

CMD [ "npm", "run", "server", "&&", "npm", "start" ]
