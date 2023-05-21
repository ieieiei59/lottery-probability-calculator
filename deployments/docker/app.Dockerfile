FROM node:18-bullseye as builder

# update/upgrade apt
RUN apt upgrade -y && apt update -y

# install nest/cli
RUN yarn global add @nestjs/cli

# make workspace
RUN mkdir /workspace && chown node:node /workspace

# switch user to node
USER node

# build app
COPY ./package.json /workspace/package.json
COPY ./yarn.lock /workspace/yarn.lock
RUN yarn install --production

COPY ./ /workspace
RUN yarn build


FROM node:18-alpine3.17

# create and set working_dir
RUN mkdir /app
WORKDIR /app

# copy data from builder
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json /app/package.json

# start app
CMD ["yarn", "start:prod"]
