# factortastic
To format the content for GitHub's README.md in Markdown (which is the same way content is formatted here in ChatGPT), you can use the following template. Markdown is a lightweight markup language with plain-text formatting syntax that can be converted into HTML and is widely used for README files on GitHub.

Here's how your README content can be formatted:

markdown
Copy code
# Factortastic

## Overview
Factortastic is an engaging and educational card game designed for children. It combines fun with learning, helping kids develop their mathematical skills and strategic thinking. This repository contains the source code for the Factortastic web application, including both frontend and backend components.

## Project Structure
The project is divided into two main directories:

- **backend**: Contains the server-side code written in Python 3.10 (Fast-API) and AWS SAM.
- **frontend**: Houses the client-side code. This includes the user interface, written in HTML/CSS/JS, along with configuration files for Vite and a dedicated Dockerfile.

## Getting Started

### Prerequisites
- Docker
- Node.js
- npm (Node Package Manager)
- AWS SAM

### Installation
1. Clone the repository:
git clone https://github.com/premiumvortex/factortastic.git

2. Navigate to the project directory:
cd factortastic

3. To build and run the Docker containers for both frontend and backend, use:


docker-compose up --build
### Usage
After successfully building and running the containers, you can access the Factortastic game through your web browser by visiting localhost:PORT, where PORT is the port number specified in the docker-compose.yml file for the frontend service.

### Contributing

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### Run Backend Locally:
```
cd backend
sam build
sam validate
sam local start-api --env-vars .env.json --port 5000
```

### HelpFul Commands for Docker:
```
docker-compose down
docker container prune -f
docker image prune -a -f
docker network prune -f
docker-compose down --volumes --remove-orphans
docker-compose build --no-cache
```

### HelpFul Commands for SAM (Backend):
```
sam build
sam local invoke
sam local start-api
```
