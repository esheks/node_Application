# Use an official Node.js runtime as a parent image
#FROM node:16-alpine

# Set the working directory to /app
#WORKDIR /application

# Copy package.json and package-lock.json to the container
#COPY package*.json ./

# Install dependencies
#RUN npm install

# Copy the rest of the application code to the container
#COPY . .

# Expose the application port
#EXPOSE 3100

# Start the application when the container starts
#CMD [ "npm", "start" ]


FROM node:10
WORKDIR /usr/app
COPY . .
RUN npm install
EXPOSE 3100
CMD ["node","test.js"]
