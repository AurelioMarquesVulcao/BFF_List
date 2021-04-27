# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /frontend

# install app dependencies
COPY ./frontend ./
# RUN npm install --global yarn
RUN npm install react-scripts@4.0.0 -g --silent && npm install -g pm2 && npm install --silent
# RUN npm install --silent
# RUN yarn
RUN yarn build
# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# COPY package.json ./
# COPY package-lock.json ./


# add app
COPY . ./

# start app
# CMD ["npm", "start"]
CMD ["pm2-runtime", "server.js"]