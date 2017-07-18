.DEFAULT_GOAL := build

IMAGE_NAME=weather-api

#Build docker image by first perform npm install outside.  We do not want to perform npm install inside Dockerfile due to layering effect
build:
	sudo docker-compose -f docker/common-services.yml run --rm build npm install
	sudo docker build -t $(IMAGE_NAME) .

#Run the built application
run:
	sudo docker-compose -f docker/common-services.yml run --rm application

#Run 
run-dev:
	sudo docker-compose -f docker/common-services.yml -f docker/dev.yml run --rm --service-ports application

test-unit:
	sudo docker-compose -f docker/common-services.yml -f docker/test.yml run --rm unit

test-integration:
	sudo docker-compose -f docker/common-services.yml -f docker/test.yml run --rm integration

test: 
	make test-unit
	make test-integration

 .PHONY: test
