import React, { useState } from 'react';
import {
  Wand2,
  Sparkles,
  Layout,
  ArrowRight,
  Clock,
  Users,
  ShoppingCart,
  Gift,
  Tag,
  Star,
  Loader2,
} from 'lucide-react';
import { Menu } from '../components/Menu';

// Mock template data - in a real app this would come from an API
const templates = [
  {
    id: 1,
    name: 'Welcome Series',
    description: 'Engage new subscribers with a warm welcome and special offer',
    icon: Users,
    tags: ['Welcome', 'Onboarding', 'Discount'],
    popularity: 'Most Popular',
  },
  {
    id: 2,
    name: 'Abandoned Cart Recovery',
    description: 'Recover lost sales with timely reminders and incentives',
    icon: ShoppingCart,
    tags: ['E-commerce', 'Recovery', 'Sales'],
    popularity: 'High Converting',
  },
  {
    id: 3,
    name: 'Birthday Rewards',
    description: 'Celebrate customers\' birthdays with special rewards',
    icon: Gift,
    tags: ['Loyalty', 'Celebration', 'Rewards'],
  },
  {
    id: 4,
    name: 'Flash Sale',
    description: 'Create urgency with time-limited special offers',
    icon: Tag,
    tags: ['Sales', 'Promotion', 'Limited Time'],
  },
];

const examplePrompts = [
  'A welcome series that introduces our brand and offers a 15% discount',
  'Re-engagement flow for customers who haven\'t purchased in 30 days',
  'Product launch sequence with early access for VIP customers',
];

function NewFlow() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Menu />
      <div className="pl-64">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Create New Flow</h1>
          
          {/* AI Flow Creation Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Wand2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Create a custom flow with AI</h2>
                <p className="text-gray-600 mt-1">
                  Describe your desired flow in natural language, and our AI will create it for you
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe the flow you want to create..."
                  className="w-full h-32 px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Generating Flow...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Flow
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>Average generation time: ~15 seconds</span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-2">Example prompts:</p>
                <div className="space-y-2">
                  {examplePrompts.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => setPrompt(example)}
                      className="block text-left w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      "{example}"
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Template Section */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-purple-50 rounded-lg">
                <Layout className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Choose from proven templates</h2>
                <p className="text-gray-600 mt-1">
                  Start with an industry-tested template and customize it to your needs
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <template.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900">{template.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                          
                          <div className="flex items-center flex-wrap gap-2 mt-3">
                            {template.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-50 rounded-full whitespace-nowrap"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        {template.popularity && (
                          <div className="flex items-center gap-1 px-2 py-1 bg-yellow-50 rounded-full whitespace-nowrap">
                            <Star className="w-3 h-3 text-yellow-600 fill-yellow-600" />
                            <span className="text-xs font-medium text-yellow-800">{template.popularity}</span>
                          </div>
                        )}
                      </div>

                      <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                        View Template
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewFlow;