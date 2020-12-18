# helloworld-image-content
Example image containing basic website content

Based on alpine linux + rsync installed

## Usage

Available on dockerhub under [lkrzyzanek/helloworld-image-content](https://hub.docker.com/r/lkrzyzanek/helloworld-image-content)



### Local Docker

```shell
docker build -t content-image .
```

```shell
docker run -it --rm -v /tmp/test/:/dest/ content-image rsync -avh /content/ /dest/
```
