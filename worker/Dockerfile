# Step 1: Use Node base image
FROM node:18
# Step 2: Set workdir
WORKDIR /

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["node", "dist/index.js"]
