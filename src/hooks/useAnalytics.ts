import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface AnalyticsData {
  activeUsers: { count: number; change: number };
  revenue: { amount: number; change: number };
  conversionRate: { rate: number; change: number };
  activeSessions: { count: number; change: number };
  monthlyStats: Array<{ month: string; activeUsers: number; revenue: number }>;
}

export function useAnalytics() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, monthlyRes] = await Promise.all([
          fetch(`${API_URL}/analytics/stats`),
          fetch(`${API_URL}/analytics/monthly`)
        ]);

        const stats = await statsRes.json();
        const monthly = await monthlyRes.json();

        setData({ ...stats, monthlyStats: monthly });
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch analytics data');
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
}