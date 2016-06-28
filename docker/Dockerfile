FROM node:latest
MAINTAINER Yannic Kilcher
ADD web/web.tar.gz /home/web/
WORKDIR /home/web/bundle
RUN cd programs/server && npm install
EXPOSE 80
ENV MONGO_URL=mongodb://mongo:27017/damgr
ENV ROOT_URL=http://localhost:80/damgr
ENV PORT=80
CMD ["node", "main.js"]
