FROM fusuf/whatsasena:latest

RUN git clone https://github.com/MHTML1/HTM /root/HTM
WORKDIR /root/HTM/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
