FROM node:16.14-alpine as development

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i -g pnpm
RUN pnpm install 
COPY . .
RUN pnpm run build

FROM node:16.14-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g pnpm
RUN pnpm install 

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]