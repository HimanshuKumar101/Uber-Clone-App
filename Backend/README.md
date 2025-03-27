# User and Captain API Documentation

## User Endpoints

### User Registration
**Endpoint:** `POST /users/register`

**Description:** Registers a new user.

**Request Body:**
```json
{
  "fullname": {"firstname": "John", "lastname": "Doe"},
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Responses:**
- **201 Created:** Returns JWT token and user details.
- **400 Bad Request:** Validation error.
- **500 Internal Server Error:** Server issue.

### User Login
**Endpoint:** `POST /users/login`

**Description:** Logs in an existing user.

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Responses:**
- **200 OK:** Returns JWT token and user details.
- **400 Bad Request:** Validation error or invalid credentials.
- **404 Not Found:** Invalid email or password.
- **500 Internal Server Error:** Server issue.

### User Profile
**Endpoint:** `GET /users/profile`

**Description:** Retrieves user profile information.

**Request Headers:** `Authorization: Bearer <token>`

**Responses:**
- **200 OK:** Returns user details.
- **401 Unauthorized:** Missing or invalid token.
- **500 Internal Server Error:** Server issue.

### User Logout
**Endpoint:** `GET /users/logout`

**Description:** Logs out an authenticated user.

**Request Headers:** `Authorization: Bearer <token>`

**Responses:**
- **200 OK:** Logout confirmation.
- **401 Unauthorized:** Missing or invalid token.
- **500 Internal Server Error:** Server issue.

---

## Captain Endpoints

### Captain Registration
**Endpoint:** `POST /captains/register`

**Description:** Registers a new captain.

**Request Body:**
```json
{
  "fullname": {"firstname": "John", "lastname": "Doe"},
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red", "plate": "ABC123", "capacity": 4,
    "vehicleType": "car", "model": "Toyota"
  }
}
```

**Responses:**
- **201 Created:** Returns JWT token and captain details.
- **400 Bad Request:** Validation error.
- **500 Internal Server Error:** Server issue.

### Captain Login
**Endpoint:** `POST /captains/login`

**Description:** Logs in an existing captain.

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Responses:**
- **200 OK:** Returns JWT token and captain details.
- **401 Unauthorized:** Invalid credentials.
- **500 Internal Server Error:** Server issue.

### Captain Profile
**Endpoint:** `GET /captains/profile`

**Description:** Retrieves captain profile information.

**Request Headers:** `Authorization: Bearer <token>`

**Responses:**
- **200 OK:** Returns captain details.
- **401 Unauthorized:** Missing or invalid token.
- **500 Internal Server Error:** Server issue.

### Captain Logout
**Endpoint:** `GET /captains/logout`

**Description:** Logs out an authenticated captain.

**Request Headers:** `Authorization: Bearer <token>`

**Responses:**
- **200 OK:** Logout confirmation.
- **401 Unauthorized:** Missing or invalid token.
- **500 Internal Server Error:** Server issue.

