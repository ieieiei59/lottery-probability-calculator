FROM node:18-bullseye

# update/upgrade apt
RUN apt upgrade -y && apt update -y

# install nest/cli
RUN yarn global add @nestjs/cli

# make workspace
RUN mkdir /workspace && chown node:node /workspace

# switch user to node
USER node
