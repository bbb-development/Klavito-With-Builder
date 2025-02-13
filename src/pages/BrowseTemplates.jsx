import React, { useState } from 'react';
import {
  Search,
  Layout,
  Filter,
  Star,
  ArrowUpDown,
  ChevronDown,
  Users,
  ShoppingCart,
  Gift,
  Tag,
  Zap,
  Heart,
  Calendar,
  Bell,
  Trophy,
  Sparkles,
  X,
} from 'lucide-react';
import { Menu } from '../components/Menu';

// Extended mock template data
const templates = [
  {
    id: 1,
    name: 'Welcome Series',
    description: 'Engage new subscribers with a warm welcome and special offer',
    longDescription: 'A comprehensive welcome series that introduces your brand, builds trust, and converts subscribers into customers. Includes a sequence of 4 emails spread over 2 weeks.',
    icon: Users,
    category: 'Onboarding',
    tags: ['Welcome', 'Onboarding', 'Discount'],
    popularity: 'Most Popular',
    rating: 4.9,
    usageCount: 12453,
    steps: ['Welcome Email', 'Brand Story', 'Product Showcase', 'Special Offer'],
    previewImage: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    name: 'Abandoned Cart Recovery',
    description: 'Recover lost sales with timely reminders and incentives',
    longDescription: 'An effective cart recovery sequence that reminds customers of their abandoned items and offers incentives to complete their purchase. Features dynamic product recommendations and personalized discounts.',
    icon: ShoppingCart,
    category: 'E-commerce',
    tags: ['E-commerce', 'Recovery', 'Sales'],
    popularity: 'High Converting',
    rating: 4.8,
    usageCount: 8932,
    steps: ['Reminder', 'Social Proof', 'Limited Time Offer', 'Final Call'],
    previewImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    name: 'Birthday Rewards',
    description: 'Celebrate customers\' birthdays with special rewards',
    longDescription: 'Make customers feel special on their birthday with personalized rewards and exclusive offers. This flow automatically triggers based on customer birth dates.',
    icon: Gift,
    category: 'Loyalty',
    tags: ['Loyalty', 'Celebration', 'Rewards'],
    rating: 4.7,
    usageCount: 6234,
    steps: ['Birthday Greeting', 'Special Reward', 'Redemption Reminder'],
    previewImage: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 4,
    name: 'Flash Sale',
    description: 'Create urgency with time-limited special offers',
    longDescription: 'Drive immediate sales with a high-impact flash sale sequence. Includes countdown timers and scarcity messaging to create urgency.',
    icon: Tag,
    category: 'Promotional',
    tags: ['Sales', 'Promotion', 'Limited Time'],
    rating: 4.6,
    usageCount: 5421,
    steps: ['Announcement', 'Sale Launch', 'Last Chance', 'Sale End'],
    previewImage: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 5,
    name: 'Re-engagement Campaign',
    description: 'Win back inactive subscribers with personalized content',
    longDescription: 'Reconnect with dormant subscribers through a carefully crafted re-engagement sequence. Uses behavioral data to deliver relevant content and offers.',
    icon: Zap,
    category: 'Retention',
    tags: ['Re-engagement', 'Retention', 'Winback'],
    rating: 4.5,
    usageCount: 4532,
    steps: ['Miss You Message', 'Value Reminder', 'Special Offer', 'Final Notice'],
    previewImage: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 6,
    name: 'VIP Customer Appreciation',
    description: 'Reward your best customers with exclusive perks',
    longDescription: 'Show appreciation to your VIP customers with exclusive offers, early access to products, and special events. Strengthens loyalty and increases customer lifetime value.',
    icon: Heart,
    category: 'Loyalty',
    tags: ['VIP', 'Loyalty', 'Rewards'],
    rating: 4.7,
    usageCount: 3876,
    steps: ['VIP Welcome', 'Exclusive Offer', 'Early Access', 'Thank You'],
    previewImage: 'https://images.unsplash.com/photo-1565071559227-20ab25b7685e?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 7,
    name: 'Seasonal Campaign',
    description: 'Capitalize on seasonal events and holidays',
    longDescription: 'Make the most of seasonal opportunities with this adaptable campaign template. Perfect for holidays, special events, and seasonal promotions.',
    icon: Calendar,
    category: 'Promotional',
    tags: ['Seasonal', 'Holiday', 'Promotion'],
    rating: 4.6,
    usageCount: 4123,
    steps: ['Season Preview', 'Main Offer', 'Gift Guide', 'Last Minute'],
    previewImage: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 8,
    name: 'Product Launch',
    description: 'Build excitement and drive sales for new products',
    longDescription: 'Create anticipation and maximize sales for your product launches. Includes teasers, launch announcement, and follow-up sequences.',
    icon: Bell,
    category: 'Launch',
    tags: ['Launch', 'Product', 'Announcement'],
    rating: 4.8,
    usageCount: 5234,
    steps: ['Teaser', 'Launch Day', 'Social Proof', 'Extended Offer'],
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
  },
];

const categories = [
  { name: 'All', count: templates.length },
  { name: 'Onboarding', count: templates.filter(t => t.category === 'Onboarding').length },
  { name: 'E-commerce', count: templates.filter(t => t.category === 'E-commerce').length },
  { name: 'Loyalty', count: templates.filter(t => t.category === 'Loyalty').length },
  { name: 'Promotional', count: templates.filter(t => t.category === 'Promotional').length },
  { name: 'Retention', count: templates.filter(t => t.category === 'Retention').length },
  { name: 'Launch', count: templates.filter(t => t.category === 'Launch').length },
];

function TemplateModal({ template, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-50 rounded-lg">
                <template.icon className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">{template.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{template.rating}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{template.usageCount.toLocaleString()} uses</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Preview Image */}
          <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={template.previewImage}
              alt={template.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">About this template</h3>
            <p className="text-gray-600">{template.longDescription}</p>
          </div>

          {/* Flow Steps */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Flow Steps</h3>
            <div className="space-y-3">
              {template.steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-6 h-6 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {template.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-50 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-4 border-t">
            <button className="flex-1 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors">
              Use This Template
            </button>
            <button className="px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors">
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowseTemplates() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Filter and sort templates
  const filteredTemplates = templates
    .filter(template => {
      const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.usageCount - a.usageCount;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <Menu />
      <div className="pl-64">
        <div className="max-w-7xl mx-auto px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Browse Templates</h1>
              <p className="text-gray-600 mt-1">
                Choose from our library of pre-built email flow templates
              </p>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Sparkles className="w-4 h-4" />
              Create Custom Template
            </button>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700">Category</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              {/* Sort */}
              <div className="relative">
                <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <ArrowUpDown className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700">Sort by</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                onClick={() => setSelectedTemplate(template)}
                className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all cursor-pointer"
              >
                {/* Preview Image */}
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={template.previewImage}
                    alt={template.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  {template.popularity && (
                    <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-yellow-50 rounded-full">
                      <Trophy className="w-3 h-3 text-yellow-600" />
                      <span className="text-xs font-medium text-yellow-800">{template.popularity}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <template.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900">{template.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex items-center flex-wrap gap-2">
                    {template.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-50 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">{template.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {template.usageCount.toLocaleString()} uses
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Template Modal */}
          {selectedTemplate && (
            <TemplateModal
              template={selectedTemplate}
              onClose={() => setSelectedTemplate(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default BrowseTemplates;