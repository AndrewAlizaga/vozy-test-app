FROM node:alpine

#Directory
WORKDIR /usr/src/app


COPY package*.json ./

# Install app dependencies
RUN npm install


COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]