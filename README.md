# Uber Clone

This is a full-stack Uber Clone application. It consists of a **backend** built with Node.js, Express, and MongoDB, and a **frontend** built with React, Vite, and TailwindCSS. The application provides user and captain interfaces for ride booking and management.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
  - [User Routes](#user-routes)
  - [Captain Routes](#captain-routes)
  - [Ride Routes](#ride-routes)
  - [Map Routes](#map-routes)
- [Socket.IO Integration](#socketio-integration)
- [Database](#database)
- [License](#license)

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

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Uber-Clone
   ```

2. Install dependencies for both backend and frontend:
   ```bash
   cd Backend
   npm install
   cd ../frontend
   npm install
   ```

3. Start the backend server:
   ```bash
   cd ../Backend
   node server.js
   ```

4. Start the frontend development server:
   ```bash
   cd ../frontend
   npm run dev
   ```

---

## Environment Variables

### Backend
Create a `.env` file in the `/Backend` directory and configure the following variables:
```plaintext
PORT=4000
DB_CONNECT=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
GOOGLE_MAPS_API=<your_google_maps_api_key>
```

### Frontend
Create a `.env` file in the `/frontend` directory and configure the following variables:
```plaintext
VITE_BASE_URL=<backend_base_url>
VITE_GOOGLE_MAPS_API_KEY=<your_google_maps_api_key>
```

---

## Project Structure

```
Uber Clone/
├── Backend/                # Backend code
│   ├── controllers/        # API controllers
│   ├── db/                 # Database connection
│   ├── middlewares/        # Middleware functions
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   ├── socket.js           # Socket.IO integration
│   ├── app.js              # Express app setup
│   ├── server.js           # Server entry point
│   └── README.md           # Backend documentation
├── frontend/               # Frontend code
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── context/        # Context API for state management
│   │   ├── pages/          # Page components for routing
│   │   ├── App.jsx         # Main application component
│   │   ├── main.jsx        # Entry point for the application
│   │   ├── index.css       # Global styles
│   │   └── App.css         # Component-specific styles
│   ├── vite.config.js      # Vite configuration
│   └── README.md           # Frontend documentation
└── README.md               # Project documentation
```

---

## Available Scripts

### Backend
- **`node server.js`**: Starts the backend server.

### Frontend
- **`npm run dev`**: Starts the frontend development server.
- **`npm run build`**: Builds the frontend application for production.
- **`npm run preview`**: Previews the production build.
- **`npm run lint`**: Runs ESLint to check for code quality issues.

---

## API Endpoints

### User Routes
- **POST /users/register**: Register a new user.
- **POST /users/login**: Login an existing user.
- **GET /users/profile**: Retrieve the profile of the authenticated user.
- **GET /users/logout**: Logout the authenticated user.

### Captain Routes
- **POST /captains/register**: Register a new captain.
- **POST /captains/login**: Login an existing captain.
- **GET /captains/profile**: Retrieve the profile of the authenticated captain.
- **GET /captains/logout**: Logout the authenticated captain.

### Ride Routes
- **POST /rides/create**: Create a new ride request.
- **GET /rides/get-fare**: Get the fare estimate for a ride.
- **POST /rides/confirm**: Confirm a ride by a captain.
- **GET /rides/start-ride**: Start a ride.
- **POST /rides/end-ride**: End a ride.

### Map Routes
- **GET /maps/get-coordinates**: Get coordinates for an address.
- **GET /maps/get-distance-time**: Get distance and time between two locations.
- **GET /maps/get-suggestions**: Get autocomplete suggestions for a location.

---

## Socket.IO Integration

The backend uses Socket.IO for real-time communication. Key events include:
- **join**: Associates a user or captain with a socket ID.
- **update-location-captain**: Updates the captain's location.
- **new-ride**: Sends a new ride request to captains in the vicinity.
- **ride-confirmed**: Notifies the user when a captain confirms the ride.
- **ride-started**: Notifies the user when the ride starts.
- **ride-ended**: Notifies the user when the ride ends.

---

## Database

The backend uses MongoDB as the database. Key collections include:
- **users**: Stores user information.
- **captains**: Stores captain information.
- **rides**: Stores ride details.
- **blacklistTokens**: Stores blacklisted JWT tokens.

---

## License

This project is licensed under the MIT License.
