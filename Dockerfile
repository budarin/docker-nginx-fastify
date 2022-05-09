

FROM node:18

EXPOSE 3000

COPY package.json package-lock.json* ./

RUN npm install --no-optional && npm cache clean --force

WORKDIR /usr

COPY . .

CMD [ "node", "app/server.js"]
