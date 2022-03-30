FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Project-TH/nothing /root/nothing
WORKDIR /root/nothing/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
