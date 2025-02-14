import React from 'react';
import { Menu } from '../components/Menu';
import EditorApp from '../lib/email-builder-js/packages/editor-sample/src/App';

function Builder() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Menu />
      <div className="pl-64">
        <div className="h-screen">
          <EditorApp />
        </div>
      </div>
    </div>
  );
}

export default Builder;