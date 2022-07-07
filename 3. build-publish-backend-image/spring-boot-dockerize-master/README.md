# spring-boot-dockerize
How to Dockerize Spring Boot Application 

# Build Docker Image 
``` code
$ docker build
"docker build" requires exactly 1 argument.
See 'docker build --help'.
Usage:  docker build [OPTIONS] PATH | URL | -
Build an image from a Dockerfile
```

The most common reason for “Docker build Requires 1 Argument” error is when we try to build the image without providing sufficient arguments. Here, in the arguments, we need to provide the directory with the command.

By default we provided dot(.) in the command which specifies the Docker daemon to use the shell’s current working directory as the build context:

``` code
$ docker build .
```

The dot(.) basically tells the Docker that Dockerfile has to be used from the current directory.

-t		Name and optionally a tag in the 'name:tag' format . (dot) stand for current directory

``` code
$ docker build -t gd-spring-boot-docker .
```
# Check Docker Image 
``` code
$ docker image ls
```
# Run Docker Image 
``` code
$ docker run -p 9090:8080 gd-spring-boot-docker
```
In the run command, we have specified that the port 8080 on the container should be mapped to the port 9090 on the Host OS.

Also try below switch
-d		Run container in background and print container ID
``` code
$ docker run -d  -p 9090:8080 gd-spring-boot-docker
```


C:\Users\GangadharParde>docker run -d -p 9090:8080 gd-spring-boot-docker
e0549cdd1919e0064496bd3c11014c4f9bea166674145c4bb186842d157b2354

C:\Users\GangadharParde>docker run -d -p 9090:8080 gd-spring-boot-docker
docker: Error response from daemon: driver failed programming external connectivity on endpoint cranky_chebyshev (d21063a31665928b778426e21788ebbd330b661b696c7a4dc4ac237f520d813b): Bind for 0.0.0.0:9090 failed: port is already allocated.


#Docker rm container
docker rm removes containers by their name or ID.

When you have Docker containers running, you first need to stop them before deleting them.

Stop all running containers: docker stop $(docker ps -a -q)
Delete all stopped containers: docker rm $(docker ps -a -q)


#Here is a breakdown of docker ps -a
list containers

``` code 
docker ps
```

The option to list all containers, even stopped ones. Without this, it defaults to only listing running containers

``` code 
-a
```


#Docker rmi
``` code 
docker rmi 
```
Removes images by their ID.


#Docker Tag
Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE

A tag name must be valid ASCII and may contain lowercase and uppercase letters, digits, underscores, periods and dashes. A tag name may not start with a period or a dash and may contain a maximum of 128 characters.
You can group your images together using names and tags, and then upload them to Share images on Docker Hub.


According to the docs:
You need to include the namespace for Docker Hub to associate it with your account.
The namespace is the same as your Docker Hub account name.
You need to put the repository name from docker (Repo are usually public and private).

You need to rename the image to YOUR_DOCKERHUB_NAME/REPO_NAME/your-image-name.
So, this means you have to tag your image before pushing:

``` code 
	docker tag <YourDockerImageId> YouDockerHubUserName/YourPublicOrPrivateRepoName:YourDockerImageName
```
and then you should be able to push it.

``` code 
	docker push YouDockerHubUserName/YourPublicOrPrivateRepoName:YourDockerImageName
```


#Push Docker Hub All Commands

``` code
docker login -u grparde
docker image ls
docker tag 51926e963c71 grparde/dockerhub:gd-spring-boot-docker
docker push grparde/dockerhub:gd-spring-boot-docker
check url: https://hub.docker.com/repositories
```

<pre>

C:\_iGDDrive\_iTraining\Docker Training\spring-boot-dockerize-master>docker login -u grparde
Password:
Login Succeeded

Logging in with your password grants your terminal complete access to your account.
For better security, log in with a limited-privilege personal access token. Learn more at https://docs.docker.com/go/access-tokens/


C:\_iGDDrive\_iTraining\Docker Training\spring-boot-dockerize-master>docker image ls
REPOSITORY                              TAG         IMAGE ID       CREATED        SIZE
gd-spring-boot-docker                   latest      51926e963c71   2 hours ago    543MB
java-hello-world                        latest      bc8e037e7978   2 months ago   835MB
<none>                                  <none>      4c8309726b10   2 months ago   131MB
docker101tutorial                       latest      023a83bc973e   2 months ago   28.8MB
crate                                   latest      146eae73ce56   2 months ago   678MB
alpine/git                              latest      3356396f045f   2 months ago   38.2MB
redis                                   latest      a10f849e1540   2 months ago   117MB
mysql                                   5.7         8aa4b5ffb001   2 months ago   462MB
amd64/consul                            latest      f5df7112c9dd   2 months ago   131MB
wordpress                               latest      b44d413c437a   2 months ago   606MB
mcr.microsoft.com/dotnet/core/samples   aspnetapp   ae74f339e67a   2 months ago   216MB
sonarqube                               latest      4ca41017fd9b   3 months ago   532MB
postgres                                9.6         027ccf656dc1   4 months ago   200MB
hello-world                             latest      feb5d9fea6a5   9 months ago   13.3kB
redis                                   4.0         191c4017dcdd   2 years ago    89.3MB
postgres                                10.10       9a05a2b9e69f   2 years ago    211MB

C:\_iGDDrive\_iTraining\Docker Training\spring-boot-dockerize-master>docker tag 51926e963c71 grparde/dockerhub:gd-spring-boot-docker

C:\_iGDDrive\_iTraining\Docker Training\spring-boot-dockerize-master>docker push grparde/dockerhub:gd-spring-boot-docker
The push refers to repository [docker.io/grparde/dockerhub]
7b68033c8065: Layer already exists
89f3c2569d89: Layer already exists
cc63c81d3b06: Layer already exists
369123a7ed65: Layer already exists
5afd661c6106: Layer already exists
66183893ba24: Layer already exists
6840c8ff46bd: Layer already exists
97d5fec864d8: Layer already exists
gd-spring-boot-docker: digest: sha256:498159ad972802b19baf63b2c2a14965fbbbec706b6c14314272e9309498f33c size: 2007
</pre>
