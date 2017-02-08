From node:boron

WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

ENV NODE_ENV=dev
EXPOSE 3000

CMD [ "npm", "run", "dev" ]
