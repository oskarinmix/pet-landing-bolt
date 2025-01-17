# Build stage
FROM node:20-alpine

WORKDIR /app

# Copy package files first
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy configuration files
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY eslint.config.js ./

# Copy source code
COPY src/ ./src/
COPY index.html ./

# Build the application
RUN npm run build

# Expose the port that Vite uses
EXPOSE 5173

# Start the Vite preview server
ENV NODE_ENV=production
CMD ["npm", "run", "preview"]