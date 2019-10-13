FROM  node 
ADD . /app/
EXPOSE 3000
WORKDIR /app
RUN npm install
RUN npm run build 
RUN cd ./server
RUN npm install 
RUN cd ../
CMD ["node","./server/index.js"]
