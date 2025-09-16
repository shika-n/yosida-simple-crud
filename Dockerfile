FROM node:lts-slim AS build
WORKDIR /app

COPY package.json pnpm-lock.yaml .
RUN corepack enable pnpm && pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

FROM node:lts-slim AS prod-deps
WORKDIR /app
COPY package.json pnpm-lock.yaml .
RUN corepack enable pnpm && pnpm install --prod --frozen-lockfile

FROM node:lts-slim
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/build .
CMD [ "node", "." ]

EXPOSE 5173
