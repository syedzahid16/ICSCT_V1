# syntax = docker/dockerfile:1

# Use a slim Node.js image
ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-slim AS base

LABEL fly_launch_runtime="Next.js"

# Set working directory
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Expose the port Fly.io expects
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]