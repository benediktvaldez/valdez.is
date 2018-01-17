FROM node:8

COPY ./yarn.lock ./package.json /code/

WORKDIR /code

RUN yarn install --pure-lockfile --no-cache

COPY ./ /code

RUN yarn run build

EXPOSE 5000

CMD [ "yarn", "run", "serve" ]
