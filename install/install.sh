#!/bin/bash

# Turn on bold green
G='\e[1;32m'
# Reset colour
R='\e[0m'

# Get the current path of the install script and make sure /dvtl2-ui points to it
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
DIR="$( dirname "${DIR}" )"
if [ ! -d "/axegains" ]; then
	ln -sf ${DIR} /axegains
fi

# Update and upgrade apt-get
echo -e "${G}Updating package repository...${R}"
#	Redis
apt-add-repository -y ppa:chris-lea/redis-server
#	RethinkDB
source /etc/lsb-release && echo "deb http://download.rethinkdb.com/apt $DISTRIB_CODENAME main" | tee /etc/apt/sources.list.d/rethinkdb.list
wget -qO- http://download.rethinkdb.com/apt/pubkey.gpg | apt-key add -
apt-get -qq update

# Install development libraries
echo -e "${G}Installing Shared Libraries...${R}"
apt-get -qq install gcc make
apt-get -qq install build-essential libssl-dev openssl software-properties-common xorg
apt-get -qq install libjpeg8 libjpeg62-dev libfreetype6 libfreetype6-dev

# Install Redis
echo -e "${G}Installing Redis Server...${R}"
apt-get -qq install redis-server

# Install RethinkDB
echo -e "${G}Installing RethinkDB Server...${R}"
apt-get -qq install rethinkdb

# Install Python 2.7
echo -e "${G}Installing Python 2.7...${R}"
apt-get -qq install python2.7 python2.7-dev

# Install pip and necessary Python modules including virtualenvs
echo -e "${G}Installing pip and setting up the virtualenvs...${R}"
apt-get -qq install python-pip
/usr/bin/pip -q install --upgrade pip
/usr/local/bin/pip -q install virtualenv
mkdir /root/venvs
mkdir /root/venvs/axegains
/usr/local/bin/virtualenv -p /usr/bin/python2 /root/venvs/axegains
/root/venvs/axegains/bin/pip install -r /axegains/install/requirements.txt

# Install supervisor
echo -e "${G}Installing supervisor...${R}"
apt-get -qq install supervisor

# Install NGINX
echo -e "${G}Installing NGINX...${R}"
apt-get -qq install nginx

# Install NPM
echo -e "${G}Installing NPM...${R}"
apt-get -qq install npm
ln -sf /usr/bin/nodejs /usr/bin/node
cd /axegains/development
npm install -no-bin-links
npm install -g grunt-cli

# Create log directories and copy configs
echo -e "${G}Creating directories and copying configuration files...${R}"
mkdir /var/log/axegains
cp -R /axegains/install/devops/* /

# Restart RethinkDB
echo -e "${G}Restarting RethinkDB Server...${R}"
service rethinkdb restart

# Setup Redis configs
echo -e "${G}Setting up Redis configurations...${R}"

#	Remove the default server
systemctl disable redis-server
service redis-server stop
rm -f /etc/init.d/redis-server

#	Install the session server
update-rc.d redis-session defaults
service redis-session start

# Install aliases, environment, and creating paths
echo -e "${G}Install aliases, environment, and creating paths...${R}"
echo "alias lf='ls -aCF'" >> ~/.bashrc
echo "alias src_axegains='source /root/venvs/axegains/bin/activate; cd /axegains'" >> ~/.bashrc

# Start services
echo -e "${G}Starting services...${R}"
supervisorctl reread && supervisorctl update

# Restart NGINX
echo -e "${G}Restarting NGINX Server...${R}"
service nginx restart

# Install app itself
echo -e "${G}Installing AxeGains...${R}"
cd /axegains
/root/venvs/axegains/bin/python -m install.install

# Let the user know we're done
echo -e "${G}Done setting up the server...${R}"
