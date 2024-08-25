# Users CRUD

## Description

A simple CRUD application designed to demonstrate the integration of Laravel with React via a RESTful API. This project provides a clear example of connecting a Laravel backend with a React frontend, featuring user authentication, login functionality, and basic operations for managing user data.

### Features

- **User Authentication:** Secure sign-up, login, and logout functionality using token-based authentication with Laravel Sanctum.
- **CRUD Operations:** Basic operations for creating, reading, updating, and deleting user records.
- **Pagination:** Navigate through different pages of user data with built-in pagination on the frontend.
- **Notifications:** Provides feedback on CRUD operations such as add, delete, and update.
- **Validation:** Includes password validation and required field checks to ensure data integrity and user input correctness.

### Built With

- **Laravel:** The backend is powered by Laravel, handling API endpoints and data management.
- **React:** The frontend is developed with React, providing a dynamic and interactive user experience.
- **RESTful API:** Communication between the frontend and backend is achieved through RESTful API calls, supporting user data management and authentication.
- **MySQL:** Used as the database system for storing and managing application data.

#### Versions

- **Laravel:** 11.20.0
- **React:** 18.3.1
- **PHP:** 8.3.10
- **Composer:** 2.7.7
- **Node.js:** v20.9.0
- **npm:** v10.1.0
- **MySQL:** 8.0.39

## Visuals

https://github.com/user-attachments/assets/dd7169f2-47d6-4967-8b37-7bd18adab395

## Installation

Ensure your development environment is properly set up. You will need PHP, Composer, Node.js, npm, and a database system of your choice. Refer to the Versions section for the specific versions used in this project and aim to use the same or newer versions.

The `env.example` file is configured for SQLite for simplicity, but you can adjust the settings in your .env file to use your preferred database.

- **Clone the Project:** Download the project or clone it using Git: `git clone <repository-url>`
- **Set Up the Backend:**
    - Navigate to the project's root directory: `cd path/to/project`
    - Copy `.env.example` to `.env` and configure the database credentials: `cp .env.example .env`
    - Install PHP dependencies using Composer: `composer install`
    - Generate the application key: `php artisan key:generate --ansi`
    - Run the database migrations and seed the database: `php artisan migrate --seed`
    - Start the local server: `php artisan serve`
- **Set Up the Frontend:**
    - Open a new terminal and navigate to the React folder: `cd path/to/project/react`
    - Copy `react/.env.example` to `.env` and adjust the `VITE_API_BASE_URL` parameter: `cp .env.example .env`
    - Install Node.js dependencies: `npm install`
    - Start the Vite server for React: `npm run dev`

## Usage

After completing the installation, open `http://localhost:5173` in your browser to interact with the React frontend of the application. The backend API runs on `http://localhost:8000` and handles data management and authentication.
