import React from 'react';
import {
  BarChart3,
  Mail,
  MousePointerClick,
  Activity,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  BookOpen,
  Layout,
  PieChart,
} from 'lucide-react';
import { Menu } from '../components/Menu';

// Mock data - in a real app this would come from an API
const metrics = {
  emailsSent: {
    value: 12453,
    change: 5.2,
  },
  openRate: {
    value: 24.8,
    change: -1.1,
  },
  clickRate: {
    value: 3.2,
    change: 2.3,
  },
  conversions: {
    value: 156,
    change: 12.5,
  },
};

const activities = [
  {
    type: 'flow_completed',
    title: 'Welcome Flow Completed',
    time: '2 hours ago',
    status: 'success',
  },
  {
    type: 'email_sent',
    title: 'Monthly Newsletter Sent',
    time: '5 hours ago',
    status: 'success',
  },
  {
    type: 'test_started',
    title: 'A/B Test Started: Subject Line Test',
    time: '1 day ago',
    status: 'warning',
  },
];

function Dashboard() {
  function MetricCard({ icon: Icon, label, value, change, subtext, color }) {
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
            <p className="text-2xl font-semibold">{typeof value === 'number' ? value.toLocaleString() : value}</p>
            {subtext && <p className="text-gray-500 text-sm mt-1">{subtext}</p>}
          </div>
        </div>
      </div>
    );
  }

  function ActivityItem({ activity }) {
    const icons = {
      flow_completed: CheckCircle2,
      email_sent: Mail,
      test_started: AlertCircle,
    };
    const Icon = icons[activity.type];
    
    return (
      <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
        <div className={`${
          activity.status === 'success' ? 'text-green-500' : 'text-amber-500'
        }`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">{activity.title}</p>
          <p className="text-sm text-gray-500">{activity.time}</p>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Menu />
      <div className="pl-64">
        <div className="max-w-7xl mx-auto px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, Sarah!</h1>
              <p className="text-gray-600 mt-1">
                Your campaigns are performing well. Here's what's happening today.
              </p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <MetricCard
              icon={Mail}
              label="Total Emails Sent"
              value={metrics.emailsSent.value}
              change={metrics.emailsSent.change}
              subtext="Last 30 days"
              color="text-blue-600"
            />
            <MetricCard
              icon={BarChart3}
              label="Average Open Rate"
              value={`${metrics.openRate.value}%`}
              change={metrics.openRate.change}
              subtext="Industry avg: 21.5%"
              color="text-green-600"
            />
            <MetricCard
              icon={MousePointerClick}
              label="Click-Through Rate"
              value={`${metrics.clickRate.value}%`}
              change={metrics.clickRate.change}
              subtext="Industry avg: 2.3%"
              color="text-purple-600"
            />
            <MetricCard
              icon={Activity}
              label="Total Conversions"
              value={metrics.conversions.value}
              change={metrics.conversions.change}
              subtext="Last 30 days"
              color="text-orange-600"
            />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Performance Overview</h2>
                  <select className="text-sm border rounded-lg px-3 py-2">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>
                <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                  <p className="text-gray-500">Chart will be displayed here</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                  <button className="text-sm text-blue-600 hover:text-blue-700">
                    View All
                  </button>
                </div>
                <div className="space-y-1">
                  {activities.map((activity, index) => (
                    <ActivityItem key={index} activity={activity} />
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Resources</h2>
                <div className="space-y-4">
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
                    <BookOpen className="w-5 h-5" />
                    <span className="text-sm">Email Marketing Guide</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
                    <Layout className="w-5 h-5" />
                    <span className="text-sm">Template Gallery</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
                    <PieChart className="w-5 h-5" />
                    <span className="text-sm">Analytics Tutorial</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;