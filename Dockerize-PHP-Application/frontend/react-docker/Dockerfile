FROM node:18.12.1-alpine
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
COPY . / /app/

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@latest -g
RUN npm install @emotion/react
RUN npm install @mui/icons-material
RUN npm install @emotion/styled
RUN npm install @mui/material @emotion/react @emotion/styled

#RUN npm install @mui/material @mui/styled-engine-sc styled-components



# start app
CMD ["npm", "start"]