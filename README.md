# Job Board API

A RESTful API for job postings built with Node.js, TypeScript, and MySQL.

## Documentation
API documentation is available at [Postman Documentation](https://documenter.getpostman.com/view/22191996/2sAYQXoYKK)

## Overview
This project is a simple Job Board backend built with Node.js and TypeScript, utilizing MySQL for data storage. It provides basic CRUD operations for job postings.

## Features
- Create, read, update, and delete job postings.
- MySQL database integration.
- Error handling middleware.
- Unit tests for job-related functionalities.

## Tech Stack

- Node.js & TypeScript
- Express.js
- MySQL & Sequelize ORM
- Docker

## Setup Instructions

1. Prerequisites
   - Docker Desktop
   - Node.js v18+
   - npm v9+

2. Environment Setup
   ```bash
   git clone <repository>
   cd job-board-api
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your database connection details:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

4. **Run the application**
   ```bash
   npm run start
   ```

5. **Run tests**
   ```bash
   npm run test
   ```

## API Endpoints
- `POST /jobs`: Create a new job posting.
- `GET /jobs`: Retrieve all job postings.
- `GET /jobs/:id`: Retrieve a single job posting by ID.
- `PUT /jobs/:id`: Update a job posting by ID.
- `DELETE /jobs/:id`: Delete a job posting by ID.


## Docker Commands

### Container Management
```bash
# Build and start containers
docker-compose up --build

# Run in background
docker-compose up -d

# Stop containers
docker-compose down

# Remove containers and volumes
docker-compose down -v
```

### Database Operations
```bash
# Connect to MySQL container
docker exec -it job-board-mysql mysql -uroot -proot

# Database commands
mysql> USE jobboard;
mysql> SHOW TABLES;
mysql> SELECT * FROM jobs;
```