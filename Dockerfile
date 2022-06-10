# ./Dockerfile
FROM node:latest as svelte
LABEL authors="creative"

WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app
#COPY package-lock.json /usr/src/app

# Get all the code needed to run the app
COPY . /usr/src/app

#install npm dependencies
RUN npm i 

ENV PORT=3000
ENV HOST=0.0.0.0 

EXPOSE 3000

#start dev server
CMD [ "npm", "run", "dev" ] 

 
