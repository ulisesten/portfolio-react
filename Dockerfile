FROM node:18-alpine AS builder

WORKDIR /build

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=builder /buld/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]