FROM node:8.9-alpine

#RUN apt-get update

# Install needed deps and clean up after
#RUN apt-get install -y -q --no-install-recommends \
#    apt-transport-https \
#    build-essential \
#    ca-certificates \
#    curl \
#    netcat-openbsd \
#    g++ \
#    gcc \
#    git \
#    npm \
#    wget

ENV OTAPATH /eteration_ota

RUN mkdir  $OTAPATH
COPY config   $OTAPATH/config
COPY node_modules   $OTAPATH/node_modules
COPY package.json $OTAPATH/package.json
COPY run.sh $OTAPATH/run.sh
RUN chmod +x $OTAPATH/run.sh

WORKDIR $OTAPATH
# RUN npm init
#RUN npm install electrode-ota-server --save

CMD $OTAPATH/run.sh
