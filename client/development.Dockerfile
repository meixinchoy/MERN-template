FROM node:16

ENV PORT 3001

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Adding source files
ADD . /usr/src/app

# RUN npm build:dev

EXPOSE 3001

# Running the app
CMD "npm" "start"