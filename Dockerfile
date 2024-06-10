from node:20.14.0

COPY . .
RUN npm ci
EXPOSE 3000/tcp
CMD [ "npm", "start" ]
