# !/usr/bin/env bash

# Stop server
forever stopall ; rm -r backend-master/ ; 

# Get latest version of frontend
wget https://github.com/ResearchU/ResearchU/archive/master.zip && unzip master.zip && cd ResearchU-master && npm i && npm run build && mv build .. && cd .. && rm -r -f ResearchU-master && rm master.zip && 

# Get latest version of backend
wget https://github.com/ResearchU/backend/archive/master.zip && unzip master.zip && rm master.zip && mv build ./backend-master/src/ && 

# Prepare to run fullstack
cp .env backend-master/ && cp db.js ./backend-master/src/ && cd backend-master/src && npm i && mv server-fullstack.js server.js && 

# Start server
forever start -c "npm run dev" .

