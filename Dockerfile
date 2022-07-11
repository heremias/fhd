FROM nginx:alpine as runner
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
COPY web/config/nginx/default.conf /etc/nginx/conf.d/default.conf
# Copy static assets from builder stage
COPY /public .
RUN ls -lA /usr/share/nginx/html
# Containers run nginx with global directives and daemon off


CMD ["nginx", "-g", "daemon off;"]
