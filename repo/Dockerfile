FROM node:12.19.0-alpine3.9

WORKDIR /app/repoapp

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install

COPY . .

CMD ["npm", "run", "start"]