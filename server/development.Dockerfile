FROM node:16

ENV PORT 3000

# Create app directory
RUN mkdir -p /backend
WORKDIR /backend

# Installing dependencies
COPY package*.json ./
RUN npm install

# Adding source files
ADD . /backend

EXPOSE 3000

# Running the app
CMD [ "npm", "run", "dev" ]