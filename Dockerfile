FROM node:14.16.0 as intermediate

WORKDIR /app

COPY package*.json /app/
COPY yarn.lock /app/

RUN yarn

COPY ./ /app/

RUN yarn build

FROM nginx:1.15

COPY --from=intermediate /app/build/ /usr/share/nginx/html/tourist-app-react

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN service nginx restart
