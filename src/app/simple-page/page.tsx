import React from 'react';
import { TextSection, CTA } from '@/components';

export default function SimplePagePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <TextSection title="Simple Page" content="This is a simple page created with our API. It only has text content." className="text-center" />
        <TextSection title="How it works" content="Send a POST request to /api/pages with JSON containing your page content. The page will be created instantly and accessible at /simple-page" />
        <CTA text="Back to Home" href="/" variant="primary" size="medium" />
      </div>
    </div>
  );
}