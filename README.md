# Users CRUD

## Description

A simple CRUD application designed to demonstrate the integration of Laravel with React via a RESTful API. This project provides a clear example of connecting a Laravel backend with a React frontend, featuring user authentication, login functionality, and basic operations for managing user data.

### Features

- Secure sign-up, login, and logout functionality using token-based authentication with Laravel Sanctum.
- Basic operations for creating, reading, updating, and deleting user records.
- Pagination on the frontend for navigating through user data.
- Feedback notifications for actions like adding, deleting, and updating records.
- Password validation and required field checks to ensure data integrity and correctness.

## Built With

![PHP](https://img.shields.io/badge/PHP-8.3-gray?logo=php&style=for-the-badge)
![Laravel](https://img.shields.io/badge/Laravel-11.20-gray?logo=laravel&style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-8.0-gray?logo=mysql&style=for-the-badge)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-gray?logo=javascript&style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-gray?logo=react&style=for-the-badge)
![CSS3](https://img.shields.io/badge/CSS3-gray?logo=css3&style=for-the-badge)

## Visuals

https://github.com/user-attachments/assets/dd7169f2-47d6-4967-8b37-7bd18adab395

## Installation

To get started with this project, follow the steps below:

1.  **Clone the repository**

    ```
    git clone https://github.com/cristianscheid/users-crud.git
    cd users-crud
    ```

2.  **Set up backend environment**

    Navigate to the backend directory (`/users-crud/backend/`).

    Install dependencies:

    ```
    composer install
    ```

    Set up environment variables:

    ```
    cp .env.example .env
    ```

    > Open the `.env` file and configure your database and other settings (you can keep the default settings to use SQLite for simplicity).

    Generate application key:

    ```
    php artisan key:generate --ansi
    ```

    Run database migrations and seed the database:

    ```
    php artisan migrate --seed
    ```

3.  **Set up frontend environment**

    Navigate to the frontend directory (`/users-crud/frontend/`).

    Install dependencies:

    ```
    npm install
    ```

    Set up environment variables:

    ```
    cp .env.example .env
    ```

    > Open the `.env` file and set the API base URL to point to your Laravel application (default: `http://localhost:8000`).

4.  **Start the servers**

    From backend directory (`/users-crud/backend/`):

    ```
    php artisan serve
    ```

    From frontend directory (`/users-crud/frontend/`):

    ```
    npm run dev
    ```

    ## Usage

    Once the application is running, you can access it at `http://localhost:5173`.

    ## License

    Distributed under the MIT License. See LICENSE.txt for more information.
