import React from 'react';
import { Card, ImageBlock, TextSection, StatsBox, CTA } from '@/components';
import { getPage } from '@/lib/database';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const components = await getPage(slug);

  if (!components) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The page "{slug}" doesn't exist.</p>
          <p className="text-sm text-gray-500 mt-2">
            Create this page via API: POST /api/pages
          </p>
          <a href="/" className="inline-block mt-4 text-center font-medium rounded border bg-purple-600 text-white border-purple-600 hover:bg-purple-700 px-4 py-2 text-sm">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  const renderComponent = (component: any, index: number) => {
    const { type, props } = component;
    
    switch (type) {
      case 'Card':
        return <Card key={index} {...props} />;
      case 'ImageBlock':
        return <ImageBlock key={index} {...props} />;
      case 'TextSection':
        return <TextSection key={index} {...props} />;
      case 'StatsBox':
        return <StatsBox key={index} {...props} />;
      case 'CTA':
        return <CTA key={index} {...props} />;
      default:
        return <div key={index}>Unknown component: {type}</div>;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {components.map((component, index) => renderComponent(component, index))}
      </div>
    </div>
  );
} 