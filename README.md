# TradeGO 📈

TradeGO is a full-stack stock trading platform inspired by modern trading applications such as Zerodha. It provides users with a seamless trading experience through a public landing page and a secure trading dashboard.

## 🚀 Live Demo

- Landing Page: https://trade-go-one.vercel.app
- Dashboard: https://trade-go-fuma-nine.vercel.app
- Backend API: https://tradego-d68h.onrender.com

---

## ✨ Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- HTTP-only Cookie-based Sessions
- Protected Dashboard Routes

### Trading Dashboard
- View Holdings
- View Positions
- Place Buy/Sell Orders
- Track Portfolio Performance
- Personalized User Dashboard

### Platform Features
- Separate Landing Page and Dashboard Applications
- Responsive Design
- Secure API Communication
- Cross-Origin Authentication Support

---

## 🏗️ Architecture

```text
Landing Page (React)
        │
        ▼
Authentication API
        │
        ▼
Dashboard (React)
        │
        ▼
Express Backend
        │
        ▼
MongoDB Database
```

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- React Toastify
- Bootstrap

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt.js
- Cookie Parser
- CORS

### Database
- MongoDB
- Mongoose

### Deployment
- Vercel
- Render
- MongoDB Atlas

---

## 📂 Project Structure

```text
TradeGO/
│
├── frontend/          # Landing Page
│
├── dashboard/         # Trading Dashboard
│
├── backend/           # Express Backend API
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend

```env
MONGO_URL=
TOKEN_KEY=
PORT=8080
```

### Landing Page

```env
REACT_APP_API_URL=
REACT_APP_DASHBOARD_URL=
```

### Dashboard

```env
REACT_APP_API_URL=
REACT_APP_LANDING_URL=
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/avinabsingh/TradeGO.git
cd TradeGO
```

### Backend

```bash
cd backend
npm install
npm start
```

### Landing Page

```bash
cd frontend
npm install
npm start
```

### Dashboard

```bash
cd dashboard
npm install
npm start
```

---

## 🔒 Authentication Flow

1. User visits Landing Page.
2. User logs in or signs up.
3. Backend generates JWT token.
4. Token is stored in an HTTP-only cookie.
5. User is redirected to Dashboard.
6. Dashboard verifies user session using cookies.

---


## 🌱 Future Enhancements

- Real-time stock prices
- Interactive charts
- Watchlist functionality
- Portfolio analytics
- Trade history
- Notifications
- Dark mode
- AI-powered recommendations

---

## 🤝 Contributing

Contributions are welcome. Feel free to fork the repository and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Avinab Singh**

- GitHub: https://github.com/avinabsingh
- LinkedIn: Add your LinkedIn profile here
