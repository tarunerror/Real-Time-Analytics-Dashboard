import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
  activeUsers: {
    count: Number,
    change: Number,
    timestamp: { type: Date, default: Date.now }
  },
  revenue: {
    amount: Number,
    change: Number,
    timestamp: { type: Date, default: Date.now }
  },
  conversionRate: {
    rate: Number,
    change: Number,
    timestamp: { type: Date, default: Date.now }
  },
  activeSessions: {
    count: Number,
    change: Number,
    timestamp: { type: Date, default: Date.now }
  },
  monthlyStats: [{
    month: String,
    activeUsers: Number,
    revenue: Number
  }]
});

export default mongoose.model('Analytics', analyticsSchema);