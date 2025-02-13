import React from 'react';
import { Stack } from '@mui/material';
import { Menu } from '../components/Menu';
import { Wand2, Download, Save, RotateCcw } from 'lucide-react';
import EditorApp from '../lib/email-builder-js/packages/editor-sample/src/App';
import { useInspectorDrawerOpen, useSamplesDrawerOpen } from '../lib/email-builder-js/packages/editor-sample/src/documents/editor/EditorContext';

function Builder() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Menu />
      <div className="pl-64">
        <div className="h-screen flex flex-col">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Wand2 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">Email Builder</h1>
                  <p className="text-sm text-gray-600">Create beautiful email templates with drag and drop</p>
                </div>
              </div>
            </div>
          </div>

          {/* Editor */}
          <div className="flex-1">
            <EditorApp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Builder;