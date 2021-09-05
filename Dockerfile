FROM node:14-alpine
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
RUN ["yarn", "build"]
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080
CMD ["yarn", "start"]
