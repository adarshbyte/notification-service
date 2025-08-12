# Step 1: Use Node base image
FROM node:18
# Step 2: Set workdir
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["node", "dist/notificationWorker.js"]
