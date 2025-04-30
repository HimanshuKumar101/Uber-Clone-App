# Uber Clone Backend

This is the backend for the Uber Clone application. It provides APIs for user and captain registration, login, ride management, and map-related services.

## Table of Contents
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [User Routes](#user-routes)
  - [Captain Routes](#captain-routes)
  - [Ride Routes](#ride-routes)
  - [Map Routes](#map-routes)
- [Socket.IO Integration](#socketio-integration)
- [Database](#database)
- [License](#license)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Uber-Clone/Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

---

## Environment Variables

Create a `.env` file in the `/Backend` directory and configure the following variables:

```plaintext
PORT=4000
DB_CONNECT=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
GOOGLE_MAPS_API=<your_google_maps_api_key>
```

---

## API Endpoints

### User Routes

- **POST /users/register**  
  Register a new user.  
  **Request Body:**  
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

- **POST /users/login**  
  Login an existing user.  
  **Request Body:**  
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

- **GET /users/profile**  
  Retrieve the profile of the authenticated user.

- **GET /users/logout**  
  Logout the authenticated user.

---

### Captain Routes

- **POST /captains/register**  
  Register a new captain.  
  **Request Body:**  
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car",
      "model": "Toyota"
    }
  }
  ```

- **POST /captains/login**  
  Login an existing captain.  
  **Request Body:**  
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

- **GET /captains/profile**  
  Retrieve the profile of the authenticated captain.

- **GET /captains/logout**  
  Logout the authenticated captain.

---

### Ride Routes

- **POST /rides/create**  
  Create a new ride request.  
  **Request Body:**  
  ```json
  {
    "pickup": "123 Main St",
    "destination": "456 Elm St",
    "vehicleType": "car"
  }
  ```

- **GET /rides/get-fare**  
  Get the fare estimate for a ride.  
  **Query Parameters:**  
  - `pickup`: Pickup address  
  - `destination`: Destination address  

- **POST /rides/confirm**  
  Confirm a ride by a captain.  
  **Request Body:**  
  ```json
  {
    "rideId": "ride_id_here"
  }
  ```

- **GET /rides/start-ride**  
  Start a ride.  
  **Query Parameters:**  
  - `rideId`: Ride ID  
  - `otp`: OTP for the ride  

- **POST /rides/end-ride**  
  End a ride.  
  **Request Body:**  
  ```json
  {
    "rideId": "ride_id_here"
  }
  ```

---

### Map Routes

- **GET /maps/get-coordinates**  
  Get coordinates for an address.  
  **Query Parameters:**  
  - `address`: Address string  

- **GET /maps/get-distance-time**  
  Get distance and time between two locations.  
  **Query Parameters:**  
  - `origin`: Origin address  
  - `destination`: Destination address  

- **GET /maps/get-suggestions**  
  Get autocomplete suggestions for a location.  
  **Query Parameters:**  
  - `input`: Input string  

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
