FROM node:20-alpine

# Install bun
RUN curl -fsSL https://bun.sh/install | bash

# Set bun path
ENV PATH="/root/.bun/bin:$PATH"

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

# Start the application using bun
CMD ["bun", "run", "preview"]