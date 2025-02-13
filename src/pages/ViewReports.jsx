import React, { useState } from 'react';
import {
  Calendar,
  Filter,
  Download,
  ChevronDown,
  Mail,
  MousePointerClick,
  BarChart3,
  Activity,
  Users,
  ArrowRight,
  Globe,
  Laptop,
  Smartphone,
  Tablet,
  TrendingUp,
  TrendingDown,
  AlertCircle,
} from 'lucide-react';
import { Menu } from '../components/Menu';

// Mock data - in a real app this would come from an API
const metrics = {
  emailsSent: {
    value: 24567,
    change: 8.3,
    data: [45, 52, 49, 55, 58, 52, 54, 48, 51, 54, 52, 49],
  },
  openRate: {
    value: 28.4,
    change: 2.1,
    data: [25, 28, 26, 29, 27, 28, 30, 27, 29, 28, 27, 28],
  },
  clickRate: {
    value: 4.2,
    change: -0.8,
    data: [4.5, 4.2, 4.0, 4.3, 4.1, 4.2, 4.0, 4.1, 4.2, 4.3, 4.1, 4.2],
  },
  bounceRate: {
    value: 0.8,
    change: -0.2,
    data: [1.0, 0.9, 0.8, 0.8, 0.7, 0.8, 0.9, 0.8, 0.7, 0.8, 0.8, 0.8],
  },
};

const deviceStats = [
  { device: 'Desktop', percentage: 45, icon: Laptop },
  { device: 'Mobile', percentage: 40, icon: Smartphone },
  { device: 'Tablet', percentage: 15, icon: Tablet },
];

const topLocations = [
  { country: 'United States', users: 12453, percentage: 45 },
  { country: 'United Kingdom', users: 5432, percentage: 20 },
  { country: 'Germany', users: 3211, percentage: 12 },
  { country: 'France', users: 2456, percentage: 9 },
  { country: 'Canada', users: 1987, percentage: 7 },
];

const flowPerformance = [
  {
    name: 'Welcome Series',
    openRate: 32.5,
    clickRate: 5.2,
    conversion: 2.8,
  },
  {
    name: 'Abandoned Cart',
    openRate: 28.7,
    clickRate: 4.8,
    conversion: 3.2,
  },
  {
    name: 'Re-engagement',
    openRate: 24.3,
    clickRate: 3.9,
    conversion: 1.9,
  },
  {
    name: 'Product Launch',
    openRate: 29.8,
    clickRate: 4.5,
    conversion: 2.5,
  },
];

function ViewReports() {
  const [dateRange, setDateRange] = useState('last30');
  const [selectedFlow, setSelectedFlow] = useState('all');

  function MetricCard({ icon: Icon, label, value, change, sparklineData, color }) {
    const isPositive = change >= 0;
    const TrendIcon = isPositive ? TrendingUp : TrendingDown;
    const trendColor = isPositive ? 'text-green-600' : 'text-red-600';
    const trendBg = isPositive ? 'bg-green-50' : 'bg-red-50';

    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`${color} bg-opacity-10 p-2 rounded-lg`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <p className="text-gray-600 text-sm">{label}</p>
            </div>
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${trendBg} ${trendColor} text-xs font-medium`}>
              <TrendIcon className="w-3 h-3" />
              {change > 0 && '+'}
              {change}%
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold">
              {typeof value === 'number' 
                ? value >= 1 
                  ? value.toLocaleString() 
                  : value.toFixed(1) + '%'
                : value}
            </p>
            {/* Sparkline placeholder */}
            <div className="h-8 mt-2">
              <div className="w-full h-full bg-gray-50 rounded flex items-end">
                {sparklineData?.map((value, index) => (
                  <div
                    key={index}
                    className="w-full bg-blue-100 rounded-sm mx-px"
                    style={{ height: `${(value / Math.max(...sparklineData)) * 100}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function DeviceStats() {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Device Breakdown</h3>
        <div className="space-y-4">
          {deviceStats.map((stat) => (
            <div key={stat.device} className="flex items-center gap-4">
              <div className="p-2 bg-gray-50 rounded-lg">
                <stat.icon className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{stat.device}</span>
                  <span className="text-sm text-gray-600">{stat.percentage}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function TopLocations() {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Top Locations</h3>
          <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
        </div>
        <div className="space-y-4">
          {topLocations.map((location) => (
            <div key={location.country} className="flex items-center gap-4">
              <div className="p-2 bg-gray-50 rounded-lg">
                <Globe className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{location.country}</span>
                  <span className="text-sm text-gray-600">{location.percentage}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{location.users.toLocaleString()} users</span>
                  <div className="w-24 bg-gray-100 rounded-full h-1">
                    <div
                      className="bg-blue-500 h-1 rounded-full"
                      style={{ width: `${location.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function FlowPerformanceTable() {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Flow Performance</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Flow Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Open Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Click Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversion
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {flowPerformance.map((flow) => (
                <tr key={flow.name} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">{flow.name}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{flow.openRate}%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{flow.clickRate}%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{flow.conversion}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Menu />
      <div className="pl-64">
        <div className="max-w-7xl mx-auto px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">View Reports</h1>
              <p className="text-gray-600 mt-1">
                Track and analyze your email flow performance
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Date Range Selector */}
              <div className="relative">
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Calendar className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">Last 30 Days</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              {/* Flow Filter */}
              <div className="relative">
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">All Flows</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              {/* Export Button */}
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Export</span>
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <MetricCard
              icon={Mail}
              label="Total Emails Sent"
              value={metrics.emailsSent.value}
              change={metrics.emailsSent.change}
              sparklineData={metrics.emailsSent.data}
              color="text-blue-600"
            />
            <MetricCard
              icon={BarChart3}
              label="Open Rate"
              value={metrics.openRate.value}
              change={metrics.openRate.change}
              sparklineData={metrics.openRate.data}
              color="text-green-600"
            />
            <MetricCard
              icon={MousePointerClick}
              label="Click-Through Rate"
              value={metrics.clickRate.value}
              change={metrics.clickRate.change}
              sparklineData={metrics.clickRate.data}
              color="text-purple-600"
            />
            <MetricCard
              icon={AlertCircle}
              label="Bounce Rate"
              value={metrics.bounceRate.value}
              change={metrics.bounceRate.change}
              sparklineData={metrics.bounceRate.data}
              color="text-orange-600"
            />
          </div>

          {/* Main Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Performance Overview</h2>
              <select className="text-sm border rounded-lg px-3 py-2">
                <option>Open Rate</option>
                <option>Click Rate</option>
                <option>Bounce Rate</option>
              </select>
            </div>
            <div className="h-80 flex items-center justify-center border-2 border-dashed rounded-lg">
              <p className="text-gray-500">Chart will be displayed here</p>
            </div>
          </div>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Flow Performance Table */}
            <div className="lg:col-span-2">
              <FlowPerformanceTable />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <DeviceStats />
              <TopLocations />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewReports;