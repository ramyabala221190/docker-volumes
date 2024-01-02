Build the image

docker build -t logging .

/var/www is the application route

Docker commands:

docker compose build <service-name>

docker compose up <service-name>

docker compose down <service-name>

docker compose volume ls

docker compose volume inspect <volume-name>

docker system prune

docker ps -a

docker build -t logging-node-staging .

docker run -d --env NODE_ENV='staging' --name logging-node-staging-container -p 8085:3000 -v ${pwd}:/var/www/ -i -t logging-node-staging