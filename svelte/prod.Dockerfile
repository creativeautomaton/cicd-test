FROM node:16.13.1-alpine3.14 AS svelte_prod

WORKDIR /svelte-app

#old run cmd stuff might throwaway
#COPY package.json  ./
#RUN npm i
#RUN npm prune
#COPY . .
#RUN npm run build
#ENV PORT=4000
#EXPOSE 4000
#ENV HOST=0.0.0.0
#RUN npm run package

COPY ./build .


# nginx state for serving content
FROM nginx:stable-alpine as nginx-prod

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static assets from builder stage
COPY --from=svelte_prod /svelte-app /usr/share/nginx/html

# Expose ports.
EXPOSE 80
EXPOSE 443
EXPOSE 4000
EXPOSE 4001
