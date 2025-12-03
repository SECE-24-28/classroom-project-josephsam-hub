# Login and Registration System

A complete authentication system using Flask (Python) backend and MySQL database.

## Setup Instructions

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Setup MySQL Database
1. Open MySQL and run the commands in `database_setup.sql`
2. Make sure MySQL is running on localhost:3306
3. Ensure the credentials in `app.py` match your MySQL setup

### 3. Run the Application
```bash
python app.py
```

### 4. Access the Application
- Registration: Open `register.html` in your browser
- Login: Open `login.html` in your browser
- The Flask server runs on `http://localhost:5000`

## Features
- User registration with password hashing
- User login with validation
- Input validation and error handling
- Modern responsive UI
- Secure password storage with bcrypt
- CORS enabled for frontend-backend communication

## File Structure
```
login-system/
├── app.py              # Flask backend
├── register.html       # Registration page
├── login.html         # Login page
├── home.html          # Success page
├── style.css          # Styling
├── database_setup.sql # Database setup
├── requirements.txt   # Python dependencies
└── README.md         # This file
```