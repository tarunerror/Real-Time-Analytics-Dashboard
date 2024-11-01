# Real-Time Analytics Dashboard 📊

![Analytics Dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000)

A modern, real-time analytics dashboard built with React, Three.js, and MongoDB. Features a stunning black matte theme with 3D visualizations and animated components.

## ✨ Features

- **Real-Time Data Updates**: Live data refresh every 30 seconds
- **3D Visualizations**: Interactive 3D charts using Three.js
- **Modern UI**: Sleek black matte theme with responsive design
- **Performance Metrics**: Track active users, revenue, conversion rates, and sessions
- **Interactive Charts**: Dynamic line charts and 3D bar graphs
- **Animated Components**: Smooth transitions and animations using Framer Motion

## 🚀 Tech Stack

- **Frontend**:
  - React with TypeScript
  - Three.js / React Three Fiber
  - Chart.js / React Chart.js 2
  - Framer Motion
  - Tailwind CSS
  - Lucide Icons

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Mongoose

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/analytics-dashboard.git
   cd analytics-dashboard
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install

   # Install backend dependencies
   cd backend
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Frontend (.env)
   VITE_API_URL=http://localhost:5000/api

   # Backend (backend/.env)
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the application**
   ```bash
   # Start backend server
   cd backend
   npm run dev

   # In a new terminal, start frontend
   cd ..
   npm run dev
   ```

## 📱 Usage

1. **Dashboard Overview**: View key metrics and performance indicators
2. **Real-Time Updates**: Data refreshes automatically every 30 seconds
3. **Interactive Charts**: 
   - Hover over charts for detailed information
   - Rotate and zoom 3D visualizations
   - Toggle different metrics visibility

## 🌐 Deployment

### Frontend (Netlify)

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Add environment variables in Netlify dashboard
4. Deploy!

### Backend

1. Deploy to your preferred hosting service (Heroku, DigitalOcean, etc.)
2. Update the `VITE_API_URL` in frontend environment to point to your deployed backend
3. Ensure MongoDB Atlas connection string is properly configured

## 📈 API Endpoints

- `GET /api/analytics/stats`: Get current analytics stats
- `GET /api/analytics/monthly`: Get monthly statistics
- `POST /api/analytics/update`: Update analytics data

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) for 3D visualization
- [Chart.js](https://www.chartjs.org/) for beautiful charts
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for database hosting

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/analytics-dashboard](https://github.com/yourusername/analytics-dashboard)