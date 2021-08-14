FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ThevinduHansara/Project-69 /root/Project-69
WORKDIR /root/Project-69/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
