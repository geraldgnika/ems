# EMS

An employee management system I developed in Django REST + Angular. A CRUD for managing employees in a company.

## Table of Contents
- [EMS](#ems)
  - [Table of Contents](#table-of-contents)
  - [Key Features](#key-features)
  - [Technical Requirements](#technical-requirements)
  - [Getting Started](#getting-started)
  - [Running the Application](#running-the-application)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
  - [Contributing](#contributing)
  - [License](#license)

## Key Features
- Employee CRUD operations
- Backend API with Django REST Framework
- Frontend interface with Angular
- Modular and scalable code structure
- User authentication and authorization (if applicable)

## Technical Requirements
- **Backend:**
  - Python 3.x
  - Django 3.x or higher
  - Django REST Framework
  - PostgreSQL or any other supported database

- **Frontend:**
  - Node.js (v14.x or higher)
  - Angular CLI (v12.x or higher)

## Getting Started
To get a local copy up and running, follow these steps:

## Running the Application

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/geraldgnika/ems.git
   cd ems/ems_backend
2. Create a virtual environment and activate it:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
4. Apply migrations:
   ```bash
   python manage.py migrate
5. Run the Django development server:
   ```bash
   python manage.py runserver

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   python manage.py runserver
2. Install the dependencies:
   ```bash
   npm install
3. Serve the Angular application:
   ```bash
   ng serve
4. Access the application at http://localhost:4200.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT License. Copyright (c) Gerald Nika
