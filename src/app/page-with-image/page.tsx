import React from 'react';
import { TextSection, ImageBlock, CTA } from '@/components';

export default function PageWithImagePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <TextSection title="Page with Image" content="This page demonstrates how to include images in your dynamically created pages." className="text-center" />
        <ImageBlock src="https://picsum.photos/800/400" alt="Sample image for demo" caption="This image was added using the ImageBlock component" />
        <TextSection title="Image Features" content="The ImageBlock component supports: captions, alt text, and responsive sizing. Images are automatically optimized by Next.js." />
        <CTA text="Go Back" href="/" variant="primary" size="medium" />
      </div>
    </div>
  );
}