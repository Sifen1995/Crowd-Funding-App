# Crowd Funding App Backend

A Laravel-based REST API backend for the Crowd Funding Application.

## Features

- **User Authentication**: Register, login, logout with Laravel Sanctum
- **User Management**: CRUD operations for users
- **Category Management**: CRUD operations for campaign categories
- **Campaign Management**: Create, read, update, delete campaigns
- **Reward Management**: Manage campaign rewards
- **Contribution System**: Handle user contributions to campaigns
- **Role-based Access Control**: Different user roles (admin, backer)

## Database Schema

### Users Table
- `user_id` (Primary Key, Auto-increment)
- `email` (Unique)
- `password_hash`
- `full_name`
- `roles` (JSON array)
- `created_at`, `updated_at`

### Categories Table
- `category_id` (Primary Key, Auto-increment)
- `name` (Unique)
- `created_at`, `updated_at`

### Campaigns Table
- `campaign_id` (Primary Key, Auto-increment)
- `creator_id` (Foreign Key to users)
- `category_id` (Foreign Key to categories)
- `title`
- `description`
- `target_amount`
- `current_amount`
- `image_url`
- `start_date`
- `end_date`
- `status` (active, pending, completed, cancelled)
- `created_at`, `updated_at`

### Rewards Table
- `reward_id` (Primary Key, Auto-increment)
- `campaign_id` (Foreign Key to campaigns)
- `title`
- `description`
- `minimum_contribution_amount`
- `quantity_available`
- `delivery_date`
- `created_at`, `updated_at`

### Contributions Table
- `contribution_id` (Primary Key, Auto-increment)
- `backer_id` (Foreign Key to users)
- `campaign_id` (Foreign Key to campaigns)
- `reward_id` (Foreign Key to rewards)
- `amount`
- `payment_status` (pending, completed, failed)
- `contribution_date`
- `created_at`, `updated_at`

## API Endpoints

### Public Routes
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Protected Routes (Require Authentication)
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info

#### Users
- `GET /api/users` - List all users
- `GET /api/users/{id}` - Get specific user
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user

#### Categories
- `GET /api/categories` - List all categories
- `POST /api/categories` - Create category
- `GET /api/categories/{id}` - Get specific category
- `PUT /api/categories/{id}` - Update category
- `DELETE /api/categories/{id}` - Delete category

#### Campaigns
- `GET /api/campaigns` - List all campaigns
- `POST /api/campaigns` - Create campaign
- `GET /api/campaigns/{id}` - Get specific campaign
- `PUT /api/campaigns/{id}` - Update campaign
- `DELETE /api/campaigns/{id}` - Delete campaign

#### Rewards
- `GET /api/rewards` - List all rewards
- `POST /api/rewards` - Create reward
- `GET /api/rewards/{id}` - Get specific reward
- `PUT /api/rewards/{id}` - Update reward
- `DELETE /api/rewards/{id}` - Delete reward

#### Contributions
- `GET /api/contributions` - List all contributions
- `POST /api/contributions` - Create contribution
- `GET /api/contributions/{id}` - Get specific contribution
- `PUT /api/contributions/{id}` - Update contribution
- `DELETE /api/contributions/{id}` - Delete contribution

## Setup Instructions

### Prerequisites
- PHP 8.2 or higher
- Composer
- SQLite (for development) or MySQL/PostgreSQL (for production)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   composer install
   ```

3. Copy `.env.example` to `.env` and configure your database:
   ```bash
   cp .env.example .env
   ```

4. Generate application key:
   ```bash
   php artisan key:generate
   ```

5. Run migrations:
   ```bash
   php artisan migrate
   ```

6. Seed the database:
   ```bash
   php artisan db:seed
   ```

7. Start the development server:
   ```bash
   php artisan serve 
   or 
   php -S localhost:8001 -t public   # in some machines
   # or
   php -d memory_limit=256M -S localhost:8001 -t public   # with increased memory limit
   ```

### Database Configuration

For SQLite (Development):
```
DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite
```

For MySQL:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=crowd_funding
DB_USERNAME=root
DB_PASSWORD=
```

For PostgreSQL:
```
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=crowd_funding
DB_USERNAME=root
DB_PASSWORD=
```

## Authentication

The API uses Laravel Sanctum for authentication. To access protected endpoints:

1. Register or login to get an access token
2. Include the token in the Authorization header:
   ```
   Authorization: Bearer {your-token}
   ```

## Sample API Usage

### Register a new user
```bash
curl -X POST http://localhost:8001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123",
    "full_name": "John Doe"
  }'
```

### Login
```bash
curl -X POST http://localhost:8001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

### Create a campaign (requires authentication)
```bash
curl -X POST http://localhost:8001/api/campaigns \
  -H "Authorization: Bearer {your-token}" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Amazing Project",
    "description": "A revolutionary new product",
    "target_amount": 10000.00,
    "start_date": "2025-01-01",
    "end_date": "2025-12-31",
    "category_id": 1
  }'
```

## Testing

Run the test suite:
```bash
php artisan test
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request