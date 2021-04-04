FROM node:14 as BUILD

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM gcr.io/distroless/nodejs:14

COPY --from=BUILD /app/node_modules ./node_modules
COPY --from=BUILD /app/next.config.js ./next.config.js
COPY --from=BUILD /app/.next ./.next
COPY --from=BUILD /app/public ./public

EXPOSE 5555

CMD ["node_modules/.bin/next", "start"]
