FROM node:16.13.2

WORKDIR /usr/src/app
ENV PORT 3000
COPY ./ ./
RUN npm i
CMD [ "npm", "run", "start" ]
EXPOSE $PORT