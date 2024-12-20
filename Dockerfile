FROM node:20-alpine

LABEL org.opencontainers.image.description "Find your 1RM for any lift using the Brzycki formula"

# Install bash and curl
RUN apk add --no-cache bash curl

# Install bun
RUN curl -fsSL https://bun.sh/install | bash

# Set bun path
ENV PATH="/root/.bun/bin:$PATH"

# Verify bun installation
RUN bun --version

# Create working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies using bun
RUN bun install

# Copy the rest of the application
COPY . .

# Build the application using bun
RUN bun run build

# Set host to listen on all interfaces
ENV HOST=0.0.0.0
ENV PORT=3000

# Expose the port
EXPOSE 3000

# Start the application using node
CMD ["node", ".output/server/index.mjs"]