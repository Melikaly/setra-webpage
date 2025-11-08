# --- Stage 1 : Build the app
# Use the latest LTS version of Node.js
FROM node:20-alpine AS build
ARG VITE_BASE_PATH="/"
ENV VITE_BASE_PATH=${VITE_BASE_PATH}
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm ci
# Copy the rest of your application files and build
COPY . .
RUN npm run build

# --- Stage 2 : Build the app
FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
# Copy only the built files from previous stage
COPY --from=build /app/dist ./dist
# Expose the port your app runs on
EXPOSE 3000
# Define the command to run your app
ENTRYPOINT ["serve", "-s", "dist", "-l", "3000"] 
