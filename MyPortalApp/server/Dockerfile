FROM node:14.15.1
# Create app directory
WORKDIR /usr/src/app
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY tsconfig.json ./
COPY src /usr/src/app/src
# Bundle app source
COPY . .
# check files list
RUN ls -a
# Install app dependencies
RUN npm install
RUN npm run build
EXPOSE 5000
CMD [ "npm", "start" ]