FROM nginx:1.23.1-alpine
# ENV NGINX_ENTRYPOINT_QUIET_LOGS=1
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# CMD [nginx-debug, '-g', 'daemon off;']
