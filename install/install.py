# Import modules
from modules import Config, Storage
from services.rest import Rest

# Load config
Config.load('config.json')

# Setup storage
Storage.server('default', Config.get(('nosql', 'hosts', 'default')))

# Install tables
Rest.install()
