import React from 'react';
import { Activity, Users, DollarSign, TrendingUp } from 'lucide-react';
import Navbar from './components/Navbar';
import StatCard from './components/StatCard';
import LineChart from './components/LineChart';
import Chart3D from './components/Chart3D';
import { useAnalytics } from './hooks/useAnalytics';

function App() {
  const { data, loading, error } = useAnalytics();

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Loading analytics...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Active Users"
            value={data?.activeUsers.count.toLocaleString() || '0'}
            change={data?.activeUsers.change || 0}
            icon={<Users className="w-6 h-6 text-purple-400" />}
          />
          <StatCard
            title="Revenue"
            value={`$${data?.revenue.amount.toLocaleString() || '0'}`}
            change={data?.revenue.change || 0}
            icon={<DollarSign className="w-6 h-6 text-pink-400" />}
          />
          <StatCard
            title="Conversion Rate"
            value={`${data?.conversionRate.rate || 0}%`}
            change={data?.conversionRate.change || 0}
            icon={<TrendingUp className="w-6 h-6 text-indigo-400" />}
          />
          <StatCard
            title="Active Sessions"
            value={data?.activeSessions.count.toLocaleString() || '0'}
            change={data?.activeSessions.change || 0}
            icon={<Activity className="w-6 h-6 text-blue-400" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-200">Performance Overview</h2>
            <LineChart data={data?.monthlyStats} />
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-200">Revenue Distribution</h2>
            <Chart3D data={data?.monthlyStats} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;