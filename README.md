# 🏘️ Villages API

A REST API for managing village data across India.
Built with Node.js, Express, and SQLite.

## 🚀 Tech Stack
- Node.js
- Express.js
- SQLite3

## 📦 Installation

```bash
git clone https://github.com/Vedikaagarwalx/villages-api.git
cd villages-api
npm install
node db.js
nodemon server.js
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /villages | Get all villages |
| POST | /villages | Add a new village |
| DELETE | /villages/:id | Delete a village |

## 📝 Example

POST /villages
```json
{
  "name": "Mathura",
  "state": "UP"
}
```

## 👩‍💻 Author
Vedika Agarwal