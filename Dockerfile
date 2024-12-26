# Use a specific Node.js runtime as a parent image
FROM node:20-alpine

LABEL org.opencontainers.image.description="Find your 1RM for any lift using the Brzycki formula"

# Create working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies using npm ci for faster and more reliable builds
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application using npm
RUN npm run build

# Set host to listen on all interfaces
ENV HOST=0.0.0.0
ENV PORT=3000

# Expose the port
EXPOSE 3000

# Start the application using node
CMD ["node", ".output/server/index.mjs"]