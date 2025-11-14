
FROM node:22 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

# Build NestJS app
RUN npm run build

# html-Ordner muss manuell erstellt/kopiert werden
# Er liegt auf Projekt-Ebene im Host-System und wird mit COPY übernommen:
COPY ./html ./html


# node image
FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

# no dev dependencies
RUN npm ci --omit=dev

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/html ./html

ENV APP_PORT=3000

EXPOSE 3000

CMD ["npm", "run", "start:prod"]

