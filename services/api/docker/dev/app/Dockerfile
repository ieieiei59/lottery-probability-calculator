FROM node:18-bullseye

# update/upgrade apt
RUN apt upgrade -y && apt update -y

# install cli tools
RUN apt install -y \
    direnv

# setting direnv
RUN echo 'eval "$(direnv hook bash)"' >> .bashrc

# install pnpm
# RUN curl -fsSL https://get.pnpm.io/install.sh | sh -
RUN npm install -g pnpm

# install nest/cli
# RUN yarn global add @nestjs/cli

# make workspace
RUN mkdir /workspace && chown node:node /workspace

# switch user to node
USER node
