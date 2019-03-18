# Docker Cheat Sheet

## Get Started, Part 1
> Orientation

```Bash
## List Docker CLI commands
docker
docker container --help

## Display Docker version and info
docker --version
docker version
docker info

## Execute Docker image
docker run hello-world

## List Docker images
docker image ls

## List Docker containers (running, all, all in quiet mode)
docker container ls
docker container ls --all
docker container ls -aq
```

## Get Started, Part 2
> containers

```Bash
docker build -t friendlyhello . # Create image using this directory's Dockerfile
docker run -p 4000:80 friendlyhello # Run "friendlyname" mapping port 4000 to 80
docker run -d -p 4000:80 friendlyhello # Same thing, but in detached mode

docker container ls # List all running containers
docker container ls -a # List all containers, even those not running
docker container stop <hash> # Gracefully stop the specified container
docker container kill <hash> # Force shutdown of the specified container
docker container rm <hash> # Remove specified container from this machine
docker container rm $(docker container ls -a -q) # Remove all containers

docker system prune # Clean up any dangling resource
docker system prune -a # Cleans up dangling resources and any stopped containers and unused images (not just dangling images)

docker image ls -a # List all images on this machine
docker image rm <image id> # Remove specified image from this machine
docker image rm $(docker image ls -a -q) # Remove all images from this machine

docker login # Log in this CLI session using your Docker credentials
docker tag <image> username/repository:tag # Tag <image> for upload to registry
docker push username/repository:tag # Upload tagged image to registry
docker run username/repository:tag # Run image from a registry
```

## Get Started, Part 3
> Services

```Bash
docker stack ls # List stacks or aps
docker stack deploy -c <composefile> <appname> # Run the specified Compose file

docker service ls # List running services associated with an app
docker service ps <service> # List tasks associated with an app

docker inspect <task or container> # Inspect task or container
docker container ls -q # List container IDs
docker stack rm <appname> # Tear down application
 docker swarm leave --force # Take down a single node swarm from the manager.
```

## Get Started, Part 4
> Swarms

```Bash
(╯°□°)╯︵ ┻━┻
```

## Get Started, Part 5
> Stacks

```Bash
(╯°□°)╯︵ ┻━┻
```

## Get Started, Part 6
> Deploy your app

```Bash
(╯°□°)╯︵ ┻━┻
```