# Uber Clone Frontend

This is the frontend for the Uber Clone application. It is built using React, Vite, and TailwindCSS. The application provides user and captain interfaces for ride booking and management.

## Table of Contents
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Features](#features)
- [License](#license)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HimanshuKumar101/Uber-Clone-App.git
   cd Uber-Clone/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Environment Variables

Create a `.env` file in the `/frontend` directory and configure the following variables:

```plaintext
VITE_BASE_URL=<backend_base_url>
VITE_GOOGLE_MAPS_API_KEY=<your_google_maps_api_key>
```

---

## Available Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run preview`**: Previews the production build.
- **`npm run lint`**: Runs ESLint to check for code quality issues.

---

## Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   ├── context/            # Context API for state management
│   ├── pages/              # Page components for routing
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point for the application
│   ├── index.css           # Global styles
│   └── App.css             # Component-specific styles
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

---

## Features

### User Interface
- **User Registration**: Allows users to sign up with their name, email, and password.
- **User Login**: Enables users to log in and access their profile.
- **Ride Booking**: Users can book rides by entering pickup and destination locations.
- **Real-Time Tracking**: Users can track their rides in real-time using Google Maps.

### Captain Interface
- **Captain Registration**: Captains can register with their details and vehicle information.
- **Captain Login**: Enables captains to log in and manage rides.
- **Ride Management**: Captains can accept, start, and complete rides.

### Shared Features
- **Authentication**: JWT-based authentication for users and captains.
- **Socket.IO Integration**: Real-time communication for ride updates.
- **Responsive Design**: Fully responsive UI for mobile and desktop devices.

---

## License

This project is licensed under the MIT License.
