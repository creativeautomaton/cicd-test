FROM node:16.13.1-alpine3.14 AS svelte
WORKDIR /usr/src/app
COPY package.json  ./
RUN npm i
COPY . .

#CMD ["npm", "run", "test"]
#CMD ["npm", "run", "prepare"]
#CMD ["npm", "run", "dev"]
#RUN npm run build
#CMD ["npm", "run", "preview"]
#CMD ["npm", "run", "package"]
