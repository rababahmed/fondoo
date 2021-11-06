# Load Image
FROM node

#Build App
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Install PM2
RUN npm install pm2 -g

# Run app
EXPOSE 4000
CMD export NODE_ENV=production && pm2-runtime start dist/main.js



