# helloworld-image-content
Example image containing basic website content

Based on alpine linux + rsync installed

## Usage

Available on dockerhub under [lkrzyzanek/helloworld-image-content](https://hub.docker.com/r/lkrzyzanek/helloworld-image-content)



### Local Docker

Build:
```shell
docker build -t helloworld-image-content .
```

Run:
```shell
# prepare target directory
mkdir /tmp/content
# run rsync copying data to target mounted dir
docker run -it --rm -v /tmp/content/:/target/ helloworld-image-content rsync -avh /content/ /target/
# check target directory
ls /tmp/content
```
