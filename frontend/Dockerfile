# Use the official Node.js image as a parent image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any dependencies
RUN npm install

# Install Jest and Storybook testing libraries
RUN npm install --save-dev @storybook/testing-library @storybook/jest

# Copy the rest of your frontend's source code from your host to your image filesystem.
# Since the Dockerfile is already in the frontend directory, you don't need to specify './frontend' in the path.
COPY . .

# Inform Docker that the container listens on the specified network port at runtime.
EXPOSE 3000

# Run the specified command within the container.
CMD ["npm", "run", "dev"]
