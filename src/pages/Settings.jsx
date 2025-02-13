import React, { useState } from 'react';
import {
  User,
  Mail,
  Lock,
  CreditCard,
  Bell,
  Globe,
  Shield,
  Plug,
  ChevronRight,
  Upload,
  Check,
  AlertCircle,
  X,
} from 'lucide-react';
import { Menu } from '../components/Menu';

// Mock user data - in a real app this would come from an API
const user = {
  firstName: 'Sarah',
  lastName: 'Johnson',
  email: 'sarah.johnson@example.com',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
  timezone: 'America/New_York',
  language: 'en',
  subscription: {
    plan: 'Professional',
    status: 'active',
    nextBilling: '2024-04-01',
  },
};

const integrations = [
  {
    name: 'SendGrid',
    description: 'Email delivery service',
    connected: true,
    icon: Mail,
  },
  {
    name: 'Mailgun',
    description: 'Transactional email API',
    connected: false,
    icon: Mail,
  },
  {
    name: 'HubSpot',
    description: 'CRM and marketing platform',
    connected: true,
    icon: Plug,
  },
];

function Settings() {
  const [activeTab, setActiveTab] = useState('account');
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'integrations', label: 'Integrations', icon: Plug },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
  ];

  function TabButton({ tab }) {
    const isActive = activeTab === tab.id;
    const Icon = tab.icon;

    return (
      <button
        onClick={() => setActiveTab(tab.id)}
        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
          isActive
            ? 'bg-gray-100 text-gray-900'
            : 'hover:bg-gray-50 text-gray-600'
        }`}
      >
        <Icon className="w-5 h-5" />
        <span className="font-medium">{tab.label}</span>
      </button>
    );
  }

  function AccountTab() {
    return (
      <div className="space-y-8">
        {/* Profile Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Profile Information</h3>
            <p className="text-sm text-gray-600 mt-1">Update your personal information</p>
          </div>
          <div className="p-6">
            <div className="flex items-start gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt="Profile"
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <button className="absolute bottom-0 right-0 p-1.5 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
                    <Upload className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      defaultValue={user.firstName}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      defaultValue={user.lastName}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    defaultValue={user.email}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                      Time Zone
                    </label>
                    <select
                      id="timezone"
                      defaultValue={user.timezone}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    >
                      <option value="America/New_York">Eastern Time (ET)</option>
                      <option value="America/Chicago">Central Time (CT)</option>
                      <option value="America/Denver">Mountain Time (MT)</option>
                      <option value="America/Los_Angeles">Pacific Time (PT)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                      Language
                    </label>
                    <select
                      id="language"
                      defaultValue={user.language}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4 flex justify-end">
            <button
              onClick={() => setShowSuccessToast(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Danger Zone</h3>
            <p className="text-sm text-gray-600 mt-1">Irreversible account actions</p>
          </div>
          <div className="p-6">
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  function BillingTab() {
    return (
      <div className="space-y-8">
        {/* Current Plan */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Current Plan</h3>
            <p className="text-sm text-gray-600 mt-1">Manage your subscription</p>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">{user.subscription.plan}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Next billing date: {new Date(user.subscription.nextBilling).toLocaleDateString()}
                </p>
              </div>
              <button className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Payment Method</h3>
            <p className="text-sm text-gray-600 mt-1">Manage your payment information</p>
          </div>
          <div className="p-6">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Update Payment Method
            </button>
          </div>
        </div>
      </div>
    );
  }

  function IntegrationsTab() {
    return (
      <div className="space-y-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Connected Services</h3>
            <p className="text-sm text-gray-600 mt-1">Manage your integrations</p>
          </div>
          <div className="divide-y divide-gray-100">
            {integrations.map((integration) => (
              <div key={integration.name} className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <integration.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{integration.name}</h4>
                    <p className="text-sm text-gray-600">{integration.description}</p>
                  </div>
                </div>
                <button
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    integration.connected
                      ? 'bg-red-50 text-red-600 hover:bg-red-100'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  {integration.connected ? 'Disconnect' : 'Connect'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function NotificationsTab() {
    return (
      <div className="space-y-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Email Notifications</h3>
            <p className="text-sm text-gray-600 mt-1">Choose what emails you want to receive</p>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              {
                title: 'Flow Completion',
                description: 'Get notified when a flow is completed',
                enabled: true,
              },
              {
                title: 'Error Alerts',
                description: 'Receive notifications about errors in your flows',
                enabled: true,
              },
              {
                title: 'Product Updates',
                description: 'Stay updated about new features and improvements',
                enabled: false,
              },
            ].map((notification) => (
              <div key={notification.title} className="p-6 flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{notification.title}</h4>
                  <p className="text-sm text-gray-600">{notification.description}</p>
                </div>
                <button
                  className={`w-12 h-6 rounded-full transition-colors ${
                    notification.enabled ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform ${
                      notification.enabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function SecurityTab() {
    return (
      <div className="space-y-8">
        {/* Password Change */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Change Password</h3>
            <p className="text-sm text-gray-600 mt-1">Update your password</p>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4 flex justify-end">
            <button
              onClick={() => setShowSuccessToast(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Update Password
            </button>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-600 mt-1">Add an extra layer of security</p>
          </div>
          <div className="p-6">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Enable 2FA
            </button>
          </div>
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
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-1">
              Manage your account settings and preferences
            </p>
          </div>

          {/* Content */}
          <div className="flex gap-8">
            {/* Sidebar */}
            <div className="w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <div className="space-y-1">
                  {tabs.map((tab) => (
                    <TabButton key={tab.id} tab={tab} />
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {activeTab === 'account' && <AccountTab />}
              {activeTab === 'billing' && <BillingTab />}
              {activeTab === 'integrations' && <IntegrationsTab />}
              {activeTab === 'notifications' && <NotificationsTab />}
              {activeTab === 'security' && <SecurityTab />}
            </div>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {showSuccessToast && (
        <div className="fixed bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg shadow-lg border border-green-100">
          <Check className="w-4 h-4" />
          <span>Changes saved successfully</span>
          <button
            onClick={() => setShowSuccessToast(false)}
            className="ml-2 p-1 hover:bg-green-100 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Delete Account Confirmation */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-50 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Delete Account</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete your account? This action cannot be undone.
            </p>
            <div className="flex items-center justify-end gap-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;