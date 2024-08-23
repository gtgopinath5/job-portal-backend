API Endpoints
Users
Unauthenticated user
POST /api/users - Create a new user
POST /api/users/login - Login user

Authenticated user
POST /api/users/logout - Logout user
GET /api/users/me - Get current user
PUT /api/users/me - Update current user
DELETE /api/users/me - Delete current user

Authenticated - Admin:
GET /api/users - Get all users
GET /api/users/:id - Get user by ID
PUT /api/users/:id - Update user by ID
DELETE /api/users/:id - Delete user by ID