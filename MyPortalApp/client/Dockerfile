FROM node:14.15.1
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
# Bundle app source
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]