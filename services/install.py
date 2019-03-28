# coding=utf8
""" Install Services

Adds global tables
"""

# Python imports
import os, platform

# Framework imports
from RestOC import Conf, Record_ReDB

# Services
from apps import auth, natf

# Load the config
Conf.load('../config.json')
sConfOverride = '../config.%s.json' % platform.node()
if os.path.isfile(sConfOverride):
	Conf.load_merge(sConfOverride)

# Add primary host
Record_ReDB.addHost('primary', Conf.get(("rethinkdb", "hosts", "primary")))

# Add the DB
Record_ReDB.dbCreate(Conf.get(("rethinkdb", "db"), "axegains"))

# Install
auth.Auth.install()
natf.Natf.install()
