# Build stage
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose the port that Vite uses
EXPOSE 5173

# Start the Vite preview server with host flag
CMD ["npm", "run", "vite", "--", "--host", "0.0.0.0"]