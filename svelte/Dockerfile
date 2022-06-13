FROM node:latest as svelte

WORKDIR /usr/src/app

# Copy dependency definitions
#COPY package.json /usr/src/app
#COPY package-lock.json /usr/src/app

# Get all the code needed to run the app
COPY . /usr/src/app

#install npm dependencies
RUN npm ci

# Remove dev dependencies
#RUN npm prune --production

ENV PORT=3000
EXPOSE 3000
ENV HOST=0.0.0.0 

#start dev server
CMD [ "npm", "run", "dev" ]
#CMD [ "npm",  "run", "start" ]
