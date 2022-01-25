FROM node:14-alpine as stage

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app/
RUN npm install

COPY ./ /app/

RUN npm run build

FROM nginx:1-alpine

COPY --from=stage /app/build/ /usr/share/nginx/html/