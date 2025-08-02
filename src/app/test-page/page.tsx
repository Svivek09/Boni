import React from 'react';
import { TextSection, CTA } from '@/components';

export default function TestPagePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <TextSection title="Test Page" content="This is a test page created via API" className="text-center" />
        <CTA text="Back to Home" href="/" variant="primary" size="medium" />
      </div>
    </div>
  );
}