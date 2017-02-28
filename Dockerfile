FROM node:boron

WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/
RUN npm install -g yarn
RUN yarn install
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

ENV NODE_ENV=production
EXPOSE 8080

RUN npm run build
CMD [ "npm", "run", "nserver" ]
