# Social Media Platform

## Overview

A social media platform built using the MERN stack (MongoDB, Express, React, Node.js). This platform allows users to connect, share content, and engage with others through a variety of features.

## Features

- **User Authentication and Profiles**
  - Secure user registration and login.
  - Customizable user profiles.
- **Messaging and Chat**
  - Private messaging between users.
- **News Feed and Content Sharing**
  - Post text, images, videos, and links.
  - Like and comment on posts.

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/social-media-platform.git
    cd social-media-platform
    ```

2. **Setup Backend**
    ```bash
    cd backend
    npm install
    ```

3. **Setup Frontend**
    ```bash
    cd ../frontend
    npm install
    ```

4. **Create a `.env` file in the `backend` directory with the following contents:**
    ```env
    MONGO_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    ```

5. **Run the backend server**
    ```bash
    cd backend
    npm run dev
    ```

6. **Run the frontend server**
    ```bash
    cd frontend
    npm start
    ```

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Register a new user or login with existing credentials.
3. Start posting content, liking, commenting, and chatting with other users.

## License

This project is licensed under the MIT License.
