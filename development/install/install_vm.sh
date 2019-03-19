#!/bin/bash

# Turn on bold green
G='\e[1;32m'
# Reset colour
R='\e[0m'

# Check for dev vm
DEVELOP=0
if [[ $1 ]]; then
	if [[ "$1" == "develop" ]]; then
		DEVELOP=1
	fi
fi

# Get the current path of the install script and make sure /axegains points to it if
#	it doesn't already
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
DIR="$( dirname "${DIR}" )"
if [ ! -d "/axegains" ];  then
	ln -sf ${DIR} /axegains
fi

# Install log
LOGFILE=/axegains/development/install/install_vm.log

# Clear the install log
echo '' > $LOGFILE

# Add the universe packages
echo -e "${G}Adding repositories to Ubuntu...${R}"
# Universe
sed -i 's/ubuntu bionic main/ubuntu bionic main universe/' /etc/apt/sources.list
sed -i 's/ubuntu bionic-security main/ubuntu bionic-security main universe/' /etc/apt/sources.list
sed -i 's/ubuntu bionic-updates main/ubuntu bionic-updates main universe/' /etc/apt/sources.list
# RethinkDB
#source /etc/lsb-release && echo "deb http://download.rethinkdb.com/apt $DISTRIB_CODENAME main" | tee /etc/apt/sources.list.d/rethinkdb.list &>> $LOGFILE
#wget -qO- https://download.rethinkdb.com/apt/pubkey.gpg | apt-key add - &>> $LOGFILE

# update apt
echo -e "${G}Updating apt...${R}"
apt-get -qq update &>> $LOGFILE

# Redis
echo -e "${G}Installing Redis...${R}"
apt-get -qq install redis &>> $LOGFILE

# RethinkDB
echo -e "${G}Installing RethinkDB...${R}"
mkdir -p /root/ports
cd /root/ports
wget https://github.com/srh/rethinkdb/releases/download/v2.3.6.srh.1/rethinkdb_2.3.6.srh.1.0bionic_amd64.deb &>> $LOGFILE
dpkg -i rethinkdb_2.3.6.srh.1.0bionic_amd64.deb &>> $LOGFILE
apt-get -qq install -f &>> $LOGFILE

# Install python virtalenv
echo -e "${G}Installing PIP and Virtualenv for Python3...${R}"
apt-get -qq install python3-pip &>> $LOGFILE
pip3 -q install virtualenv &>> $LOGFILE
mkdir -p /root/venvs/axegains
virtualenv -p /usr/bin/python3 /root/venvs/axegains &>> $LOGFILE
/root/venvs/axegains/bin/pip install -r /axegains/services/requirements.txt &>> $LOGFILE

# Install nginx
echo -e "${G}Installing NGINX...${R}"
apt-get -qq install nginx &>> $LOGFILE

# Install supervisor
echo -e "${G}Installing Supervisor...${R}"
apt-get -qq install supervisor &>> $LOGFILE

# Make folders and copy etc files
echo -e "${G}Making folders, copying server config files, and creating aliases...${R}"
# log directory
mkdir -p /var/log/axegains
# copy etc files
cp -R /axegains/development/install/devops/* /
# Aliases
echo "alias lf='ls -aCF'" >> ~/.bashrc
echo "alias src_axe='source /root/venvs/axegains/bin/activate; cd /axegains/services'" >> ~/.bashrc

# Restart services
echo -e "${G}Restarting services...${R}"
service nginx restart
service rethinkdb restart

# Installing Microservices
echo -e "${G}Installing Microservices...${R}"
cd /axegains/services
#/root/venvs/axegains/bin/python install.py

# Install Development
if [[ $DEVELOP != 0 ]]; then

	# Change supervisor info
	sed -i 's/environment=AXE_VERBOSE=0/environment=AXE_VERBOSE=1/' /etc/supervisor/supervisord.conf

	# Change nginx info
	sed -i 's/axegains.com/axegains.local/g' /etc/nginx/sites-available/*.conf
	sed -i 's/axegains\\\.com/axegains\\\.local/' /etc/nginx/sites-available/static.conf
	sed -i 's/axegains.com/axegains.local/g' /etc/nginx/ssl_params

fi
