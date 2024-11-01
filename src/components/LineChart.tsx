import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#9CA3AF',
      },
    },
  },
  scales: {
    y: {
      grid: {
        color: '#374151',
      },
      ticks: {
        color: '#9CA3AF',
      },
    },
    x: {
      grid: {
        color: '#374151',
      },
      ticks: {
        color: '#9CA3AF',
      },
    },
  },
};

interface MonthlyData {
  month: string;
  activeUsers: number;
  revenue: number;
}

interface LineChartProps {
  data?: MonthlyData[];
}

export default function LineChart({ data = [] }: LineChartProps) {
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: 'Active Users',
        data: data.map(item => item.activeUsers),
        borderColor: '#8B5CF6',
        backgroundColor: '#8B5CF680',
        tension: 0.4,
      },
      {
        label: 'Revenue',
        data: data.map(item => item.revenue),
        borderColor: '#EC4899',
        backgroundColor: '#EC489980',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="h-[400px] bg-gray-900 p-4 rounded-xl border border-gray-800">
      <Line options={options} data={chartData} />
    </div>
  );
}