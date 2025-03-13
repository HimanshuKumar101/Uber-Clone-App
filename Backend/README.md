# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint allows a new user to register by providing their first name, last name, email, and password. The password will be hashed before storing in the database.

## Request Body
The request body should be a JSON object containing the following fields:
- `fullname.firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user account. Must be at least 6 characters long.

Example:
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

## Responses

### Success
- **Status Code:** 201 Created
- **Response Body:**
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### Validation Error
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

### Server Error
- **Status Code:** 500 Internal Server Error
- **Response Body:**
  ```json
  {
    "message": "Internal server error"
  }
  ```

# User Login Endpoint

## Endpoint
`POST /users/login`

## Description
This endpoint allows an existing user to log in by providing their email and password.

## Request Body
The request body should be a JSON object containing the following fields:
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user account. Must be at least 6 characters long.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### Validation Error
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

### Authentication Error
- **Status Code:** 404 Not Found
- **Response Body:**
  ```json
  {
    "message": "Invalid mail or password"
  }
  ```

### Invalid Credentials
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "message": "Invalid credentials"
  }
  ```

### Server Error
- **Status Code:** 500 Internal Server Error
- **Response Body:**
  ```json
  {
    "message": "Internal server error"
  }
  ```

# User Profile Endpoint

## Endpoint
`GET /users/profile`

## Description
This endpoint allows an authenticated user to retrieve their profile information.

## Request Headers
- `Authorization` (string, required): The JWT token for authentication.

## Responses

### Success
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

### Authentication Error
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Server Error
- **Status Code:** 500 Internal Server Error
- **Response Body:**
  ```json
  {
    "message": "Internal server error"
  }
  ```

# User Logout Endpoint

## Endpoint
`GET /users/logout`

## Description
This endpoint allows an authenticated user to log out.

## Request Headers
- `Authorization` (string, required): The JWT token for authentication.

## Responses

### Success
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "message": "Successfully logged out"
  }
  ```

### Authentication Error
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Server Error
- **Status Code:** 500 Internal Server Error
- **Response Body:**
  ```json
  {
    "message": "Internal server error"
  }
  ```
