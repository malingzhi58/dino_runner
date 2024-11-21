#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting Dino Game Server...${NC}"

# Check if Python is installed
if command -v python3 &>/dev/null; then
    echo -e "${GREEN}Starting server with Python 3...${NC}"
    python3 -m http.server 8000
elif command -v python &>/dev/null; then
    echo -e "${GREEN}Starting server with Python...${NC}"
    python -m SimpleHTTPServer 8000
# Check if Node.js/npm is installed
elif command -v npx &>/dev/null; then
    echo -e "${GREEN}Starting server with Node.js...${NC}"
    npx http-server -p 8000
else
    echo "Error: Neither Python nor Node.js is installed."
    echo "Please install either Python or Node.js to run the server."
    exit 1
fi 