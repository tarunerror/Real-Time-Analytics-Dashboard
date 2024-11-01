import express from 'express';
import Analytics from '../models/Analytics.js';

const router = express.Router();

// Get current stats
router.get('/stats', async (req, res) => {
  try {
    const stats = await Analytics.findOne().sort({ 'timestamp': -1 });
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get monthly data for charts
router.get('/monthly', async (req, res) => {
  try {
    const stats = await Analytics.findOne();
    res.json(stats.monthlyStats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update stats (simulated real-time updates)
router.post('/update', async (req, res) => {
  try {
    const newStats = new Analytics({
      activeUsers: {
        count: Math.floor(Math.random() * 5000),
        change: (Math.random() * 20) - 10
      },
      revenue: {
        amount: Math.floor(Math.random() * 100000),
        change: (Math.random() * 20) - 10
      },
      conversionRate: {
        rate: (Math.random() * 5).toFixed(2),
        change: (Math.random() * 20) - 10
      },
      activeSessions: {
        count: Math.floor(Math.random() * 2000),
        change: (Math.random() * 20) - 10
      },
      monthlyStats: [
        { month: 'Jan', activeUsers: Math.floor(Math.random() * 100), revenue: Math.floor(Math.random() * 100) },
        { month: 'Feb', activeUsers: Math.floor(Math.random() * 100), revenue: Math.floor(Math.random() * 100) },
        { month: 'Mar', activeUsers: Math.floor(Math.random() * 100), revenue: Math.floor(Math.random() * 100) },
        { month: 'Apr', activeUsers: Math.floor(Math.random() * 100), revenue: Math.floor(Math.random() * 100) },
        { month: 'May', activeUsers: Math.floor(Math.random() * 100), revenue: Math.floor(Math.random() * 100) },
        { month: 'Jun', activeUsers: Math.floor(Math.random() * 100), revenue: Math.floor(Math.random() * 100) }
      ]
    });

    await newStats.save();
    res.status(201).json(newStats);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;