#!/bin/bash

# Turn on bold green
G='\e[1;32m'
# Reset colour
R='\e[0m'

# Install NodeJS 11
echo -e "${G}Installing NodeJS 11...${R}"
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
apt-get -qq install nodejs

# Install package
echo -e "${G}Installing grunt and npm modules...${R}"
cd ../development
npm install

