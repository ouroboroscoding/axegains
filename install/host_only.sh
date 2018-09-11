#!/bin/bash

echo -e "\e[1;32mInstalling host only network...\e[0m"

echo "
# Host-only network
auto enp0s8
iface enp0s8 inet static
address 192.168.56.9
netmask 255.255.255.0" >> /etc/network/interfaces

ifdown enp0s8 && ifup enp0s8
