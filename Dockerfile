# Use the official Node.js image as the base image
FROM node:18-alpine AS build


# Accept build-time variable for VITE_API_URL
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a lightweight web server for serving the production build
FROM nginx:stable-alpine AS production

# Copy the built application from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port the app runs on
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]