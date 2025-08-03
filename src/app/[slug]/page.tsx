import React from 'react';
import Link from 'next/link';
import { Card, ImageBlock, TextSection, StatsBox, CTA } from '@/components';
import { getPage } from '@/lib/database';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const components = await getPage(slug);

  if (!components) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The page &quot;{slug}&quot; doesn&apos;t exist.</p>
          <p className="text-sm text-gray-500 mt-2">
            Create this page via API: POST /api/pages
          </p>
          <Link href="/" className="inline-block mt-4 text-center font-medium rounded border bg-purple-600 text-white border-purple-600 hover:bg-purple-700 px-4 py-2 text-sm">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const renderComponent = (component: { type: string; props: Record<string, unknown> }, index: number) => {
    const { type, props } = component;
    
    switch (type) {
      case 'Card':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <Card key={index} {...(props as any)} />;
      case 'ImageBlock':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <ImageBlock key={index} {...(props as any)} />;
      case 'TextSection':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <TextSection key={index} {...(props as any)} />;
      case 'StatsBox':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <StatsBox key={index} {...(props as any)} />;
      case 'CTA':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <CTA key={index} {...(props as any)} />;
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