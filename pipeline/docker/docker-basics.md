# Docker Basics
### [Get Started](https://docs.docker.com/get-started/)

![Orientation & Setup](https://docs.docker.com/get-started/images/laurel-docker-containers.png)

## Docker Concepts

Docker is a platform to **develop, deploy, and run** applications with containers. The use of Linux containers to deploy applications is called containerization.

Containers are:

- Flexible
- Lightweight
- Interchangeable
- Portable
- Scalable
- Stackable

## Images & Containers

A container is launched by running an image.

An **image** is an executable package that includes everything needed to run an application.

A **container** is a runtime instance of an image -- what the image becomes in memory when executed.

> You can see a list of your running containers with the command `docker ps`.

## Containers & Virtual Machines

A **container** runs *natively* on Linux and shares the kernel of the host machine with other containers. It runs a discrete process, taking no more memory than any other executable, making it lightweight.

![CONTAINER](https://docs.docker.com/images/Container%402x.png)

By contrast, a **virtual machine** runs a full-blown *guest* operating system with *virtual* access to host resources through a hypervisor. VMs generally provide an environment with more resources than most applications need.

![VM](https://docs.docker.com/images/VM%402x.png)

## Containerization makes [CI/CD](https://www.docker.com/solutions/cicd) seamless.

- applications have no system dependencies
- updates can be pushed to any part of a distributed application
- resource density can be optimized

> With Docker, scaling an app is a matter of spinning up new executables, as opposed to running heavy VM hosts.

## List Docker CLI Commands
```Bash
docker
docker container --help
```

## Display Docker version and info
```Bash
docker -v
docker version
docker info
```

## Execute Docker Image
```Bash
docker run hello-world
```

### List Docker Images
```Bash
docker image ls
```

### List Docker Containers (running, all, all in quiet mode)
```Bash
docker container ls
docker container ls --all
docker container ls -aq
```
