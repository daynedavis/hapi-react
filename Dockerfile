FROM node:7.7

WORKDIR /tmp
COPY package.json /tmp/
COPY yarn.lock /tmp/
RUN yarn install
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

ENV NODE_ENV=production
EXPOSE 8080

RUN npm run build
CMD [ "npm", "run", "nserver" ]
