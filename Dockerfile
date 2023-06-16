# Use a imagem base do Node.js
FROM node:14

# Defina o diretório de trabalho como /app
WORKDIR /app

# Copie o arquivo package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Execute o comando npm install para instalar as dependências
RUN npm install

# Copie o restante do código-fonte do aplicativo para o diretório de trabalho
COPY . .

# Execute o comando ng build para criar os arquivos de build do Angular
RUN npm run build

# Defina a porta em que o servidor Angular será executado
EXPOSE 4200

# Execute o comando npm start para iniciar o servidor Angular
CMD ["npm", "start"]
