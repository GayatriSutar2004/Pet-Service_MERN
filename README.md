# Pet Service Dashboard (MERN Stack)

## Project Overview

The **Pet Service Dashboard** is a full-stack MERN application that allows users to:

* Upload vendor data using a JSON file
* Store vendor information in MongoDB
* View category insights using a dynamic chart
* Manage pet service vendors such as travel, grooming, food, and training services

This project demonstrates core MERN stack concepts including API development, database integration, file upload handling, and frontend visualization.

---

## Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer (for file upload)
* CORS

---

## Features

* Upload vendor data using JSON file
* Store vendor data in MongoDB
* Display category insights using chart visualization
* REST API integration
* Responsive UI
* Full MERN stack architecture

---

## Project Structure

```
pet-dashboard/
│
├── backend/
│   ├── models/
│   │   ├── Category.js
│   │   └── Vendor.js
│   │
│   ├── routes/
│   │   ├── categoryRoutes.js
│   │   ├── vendorRoutes.js
│   │   └── uploadRoutes.js
│   │
│   ├── server.js
│   └── seed.js
│
├── frontend/
│   ├── src/
│   │   ├── CategoryChart.js
│   │   ├── FileUpload.js
│   │   ├── App.js
│   │   └── index.js
│
└── README.md
```

---

## Installation & Setup

### 1. Clone the Repository

```
git clone https://github.com/GayatriSutar2004/Pet-Service_MERN.git
cd Pet-Service_MERN
```

---

### 2. Install Backend Dependencies

```
cd backend
npm install
```

---

### 3. Install Frontend Dependencies

```
cd ../frontend
npm install
```

---

### 4. Start MongoDB

Make sure MongoDB is running locally.

```
mongod
```

---

### 5. Run Backend Server

```
cd backend
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

### 6. Run Frontend

```
cd frontend
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## API Endpoints

### Get Category Insights

```
GET /api/categories/insights
```

Returns:

```
[
  {
    "title": "Travel & Accommodation",
    "viewsCount": 79
  }
]
```

---

### Upload Vendor JSON File

```
POST /api/upload-json
```

Uploads:

```
vendors.json
```

Stores vendor data in MongoDB.

---

### Get Vendors by Category

```
GET /api/vendors/category/:category
```

Example:

```
GET /api/vendors/category/Travel & Accommodation
```

---

## Sample JSON Format

```
{
  "vendors": [
    {
      "title": "Vivanta New Delhi Dwarka",
      "category": "Travel & Accommodation",
      "city": "New Delhi",
      "rating": 4.4
    }
  ]
}
```

---

## Screenshots

You can add screenshots here:

* Dashboard view
* File upload feature
* Category chart

Example:

```
![Dashboard Screenshot](screenshot.png)
```

---

## Author

Gayatri Sutar

---

## License

This project is for educational and internship assessment purposes.
