# Use the official Node.js image as the base image for the build stage
FROM node:latest as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install project dependencies
RUN yarn install

# Copy the rest of the project files to the working directory
COPY . .

# Build the production version of the React app
RUN yarn build

# Use the official Nginx image as the base image for the production stage
FROM nginx:latest as production-stage

# Copy the built React app from the build-stage to the Nginx's default public directory
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose the port on which Nginx will listen
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
