FROM node:lts-slim

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

#RUN npm install
# If you are building your code for production
RUN npm i -g pnpm
RUN pnpm i
RUN pnpm build


EXPOSE 4000
CMD [ "pnpm", "start" ]

