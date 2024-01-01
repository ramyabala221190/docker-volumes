FROM node:alpine

WORKDIR /var/www

COPY package.json package.json
RUN npm install

COPY . .

EXPOSE 300

ENTRYPOINT ["node", "./bin/www"]