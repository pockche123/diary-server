# Diary App Backend

Welcome to the Diary App backend repository! This part of the application handles server-side operations, providing APIs for managing diary entries. Below, you'll find information on how to set up and use the backend.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- [Technical Details](#technical-details)
  - [Dependencies](#dependencies)
  - [Project Structure](#project-structure)
  - [Database](#database)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository: `git clone <backend-repository-url>`
2. Navigate to the backend directory: `cd diary-app/backend`
3. Config you app in .env using Elephant SQl. 
4. Set up your database: `npm run setup-db`
3. Install dependencies: `npm install`

## Usage

### API Endpoints

- The backend exposes the following API endpoints for diary entry operations:
  - `POST /diary`: Create a new diary entry.
  - `GET /diary`: Get a list of all diary entries.
  - `GET /diary/:id`: Get details of a specific diary entry.
  - `GET /diary/:username`: Get details of a specific diary entry of a user.
  - `PATCH /diary/:id`: Update the text of a diary entry.
  - `DELETE /diary/:id`: Delete a diary entry.

## Technical Details

### Dependencies

- Built with [Express](https://expressjs.com/) and JavaScript.


### Project Structure

- The project follows a modular structure with separate files for routes, controllers, and database configuration.
- API routes are defined in `routers/diary.js`.
- Database configuration is in databse folder.
- Controllers in the `controllers` directory handle business logic.

### Database

- Utilizes an SQL database for storing diary entries.
- Configuration can be found in `.env`.
- Database schema is defined in `migrations` and `seeds` directories.

Feel free to explore and modify the backend as needed. If you have any questions or feedback, please don't hesitate to reach out.
