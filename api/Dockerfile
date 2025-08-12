# build type script
FROM node:20-alpine AS builder
WORKDIR /

COPY package*.json ./
RUN npm install 
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

FROM node:20-alpine
WORKDIR /

COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder /dist ./dist

EXPOSE 3000 
CMD ["node","dist/index.js"]