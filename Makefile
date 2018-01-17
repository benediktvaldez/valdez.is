ifndef APP
	APP := www-valdez-is
endif

ifndef DOCKER_REGISTRY
	DOCKER_REGISTRY := registry.heroku.com
endif

ifndef DOCKER_TAG_VERSION
	DOCKER_TAG_VERSION := $(shell git rev-parse --short HEAD)
endif

ifndef DOCKER_IMAGE
	DOCKER_IMAGE := ${DOCKER_REGISTRY}/${APP}/web:${DOCKER_TAG_VERSION}
endif


##
## Welcome young Padawan!
## This output should give you some insight into what you can do from here. For more detailed
## overview/instructions/troubleshooting, please checkout .github/CONTRIBUTION_GUIDELINES.md.

##
## --- Commands

help: # This help dialog
	@./.utils/help.js
	@make debug

debug: # print out all the environment variables as they will be used by other commands
	@printf "\
	APP: ${APP} \n\
	DOCKER_REGISTRY: ${DOCKER_REGISTRY} \n\
	DOCKER_TAG_VERSION: ${DOCKER_TAG_VERSION} \n\
	DOCKER_IMAGE: ${DOCKER_IMAGE}"

login: # Log into the docker registry with provided credentials
	docker login \
		-u "${DOCKER_USERNAME}" \
		-p "${DOCKER_PASSWORD}" \
		${DOCKER_REGISTRY}

##
## --- Project container
.PHONY: build
build: # Build the container with appropriate tags etc
	docker build \
		-f ./Dockerfile \
		-t ${DOCKER_IMAGE} \
		.

test: # Run the tests inside the container
	docker run \
		--rm -it \
		${DOCKER_IMAGE} \
		yarn test

run: # Run the latest container
	docker run \
		--rm -it \
		-p 5000:5000 \
		${DOCKER_IMAGE}

deploy: # Deploy by pushing the latest image to the registry
	docker push \
		${DOCKER_IMAGE}

shell: # Open a bash shell within the container (ctrl+d to exit)
	docker run \
		--rm -it \
		${DOCKER_IMAGE} \
		bash

##
## --- Environment variables
