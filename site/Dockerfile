# Build stage
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# Production stage
FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.output ./

ENV NODE_ENV=production
ENV HOST=0.0.0.0

EXPOSE 8080

CMD ["node", "server/index.mjs"]
