Build the image

docker build -t logging .

Run the image without the volume. you will lose the logs folder if the container is removed

docker run -d -p 8081:3000 logging

Run the image with docker volume
/var/www is the application root and 

docker run -d -p 8081:3000 logging-node -v logging:/var/www/logs

docker run -d -p 8082:3000 logging-node -v logs:/var/www/logs


Run the image with custom docker volume

docker run -d -p 8081:3000 logging -v "${PWD}"/logs:/var/www/logs

docker compose -f docker-compose.yml build

