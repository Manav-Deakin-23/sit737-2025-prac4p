# sit737-2025-prac4p
 
Calculator Microservice

Overview

This project is a simple calculator microservice built using Node.js and Express. It provides a REST API to perform basic arithmetic operations, including addition, subtraction, multiplication, and division. The service includes error handling and logging using the Winston library.

Features

REST API for arithmetic operations

Error handling for invalid inputs

Logging using Winston for monitoring requests and errors

Prerequisites

Ensure you have the following installed:

Node.js

Git

Visual Studio Code

Installation

Clone the repository:

git clone https://github.com/your-username/sit737-2025-prac4p.git
cd sit737-2025-prac4p

Install dependencies:

npm install

Running the Microservice

To start the server, run:

node index.js

API Endpoints

Use a browser or API testing tools like Postman to send GET requests to the following endpoints:

http://localhost:3000/add?num1=10&num2=5
http://localhost:3000/subtract?num1=10&num2=5
http://localhost:3000/multiply?num1=10&num2=5
http://localhost:3000/divide?num1=10&num2=5

Logging

To monitor logs in real-time, use:

mkdir logs
tail -f logs/combined.log

Deployment

To deploy the service, push the project to your GitHub repository:

git init
git add .
git commit -m "Initial commit - Calculator Microservice"
git branch -M main
git remote add origin https://github.com/your-username/sit737-2025-prac4p.git
git push -u origin main
