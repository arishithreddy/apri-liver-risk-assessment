# APRI-Based Liver Risk Assessment System

A full-stack healthcare web application developed during Practice School at Yashoda Hospitals for non-invasive liver fibrosis risk assessment using APRI scoring.

## Live Demo

https://arishithreddy.github.io/apri-liver-risk-assessment/

---

## Features

- Multi-step APRI score calculation system
- Patient data collection and validation
- Liver fibrosis risk interpretation
- Admin login functionality
- Interactive analysis dashboard
- Responsive healthcare-themed UI
- MongoDB database integration
- REST API backend using Express.js

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap 5

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

---

## Project Structure

```bash
frontend/
│
├── assets/
├── pages/
├── index.html

backend/
│
├── config/
├── controllers/
├── models/
├── routes/
├── server.js
```

---

## APRI Formula

```text
APRI Score = [(AST / AST Upper Limit) / Platelet Count] × 100
```

---

## Key Functionalities

### Patient Workflow
1. Enter AST level
2. Enter AST upper limit
3. Enter platelet count
4. Calculate APRI score
5. Store patient data securely

### Admin Features
- View stored patient records
- Access analysis dashboard
- Review fibrosis interpretations

---

## Database Integration

Patient records are stored using MongoDB Atlas through REST APIs built with Express.js.

Sensitive credentials are protected using `.env` configuration files and are not exposed publicly on GitHub.

---

## Installation

### Clone Repository

```bash
git clone https://github.com/arishithreddy/apri-liver-risk-assessment.git
```

### Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
```

Run server:

```bash
npm run dev
```

---

## Future Improvements

- JWT Authentication
- Doctor Dashboard
- Patient History Tracking
- PDF Report Generation
- Machine Learning-based prediction
- Cloud Deployment

---

## Developed By

Rishith Reddy  
BITS Pilani Hyderabad Campus

Practice School Project at Yashoda Hospitals
