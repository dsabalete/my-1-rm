# Use a specific Node.js runtime as a parent image
# Using lts-alpine ensures we get the latest LTS with security patches
FROM node:lts-alpine

LABEL org.opencontainers.image.description="Find your 1RM for any lift using the Brzycki formula"

# Update Alpine packages and install security patches
RUN apk update && apk upgrade && apk add --no-cache bash curl

# Install bun
RUN curl -fsSL https://bun.sh/install | bash

# Set bun path
ENV PATH="/root/.bun/bin:$PATH"

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Create working directory
WORKDIR /app

# Change ownership to non-root user
RUN chown -R nodejs:nodejs /app

# Copy package files
COPY --chown=nodejs:nodejs package*.json ./

# Install dependencies using npm (as root, but files will be owned by nodejs)
RUN npm ci && chown -R nodejs:nodejs /app

# Copy the rest of the application
COPY --chown=nodejs:nodejs . .

# Build the application using npm (as root, but output will be owned by nodejs)
RUN npm run build && chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Set host to listen on all interfaces
ENV HOST=0.0.0.0
ENV PORT=3000

# Expose the port
EXPOSE 3000

# Start the application using node
CMD ["node", ".output/server/index.mjs"]