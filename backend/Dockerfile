FROM node:20-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# Expose port 4000
EXPOSE 4000

# Start the application
CMD ["node", "server.js"]
