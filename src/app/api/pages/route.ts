import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

interface ComponentConfig {
  type: string;
  props: Record<string, unknown>;
}

interface PageRequest {
  slug: string;
  components: ComponentConfig[];
}

function generatePageContent(slug: string, components: ComponentConfig[]): string {
  const functionName = slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');

  const componentImports = components.map(comp => comp.type).filter((value, index, self) => self.indexOf(value) === index);
  
  const componentJSX = components.map(comp => {
    const props = Object.entries(comp.props)
      .map(([key, value]) => {
        if (typeof value === 'string') {
          return `${key}="${value}"`;
        }
        return `${key}={${JSON.stringify(value)}}`;
      })
      .join(' ');

    return `        <${comp.type} ${props} />`;
  }).join('\n');

  return `import React from 'react';
import { ${componentImports.join(', ')} } from '@/components';

export default function ${functionName}Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
${componentJSX}
      </div>
    </div>
  );
}`;
}

export async function POST(request: NextRequest) {
  try {
    const body: PageRequest = await request.json();
    const { slug, components } = body;

    if (!slug || !components || !Array.isArray(components)) {
      return NextResponse.json(
        { error: 'Invalid request. slug and components array are required.' },
        { status: 400 }
      );
    }

    const appDir = path.join(process.cwd(), 'src', 'app');
    const pageDir = path.join(appDir, slug);
    const pageFile = path.join(pageDir, 'page.tsx');

    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    const pageContent = generatePageContent(slug, components);
    fs.writeFileSync(pageFile, pageContent);

    return NextResponse.json({
      success: true,
      url: `/${slug}`,
      message: `Page created successfully at /${slug}`
    });

  } catch (error) {
    console.error('Error creating page:', error);
    return NextResponse.json(
      { error: 'Failed to create page' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const appDir = path.join(process.cwd(), 'src', 'app');
    const pages: string[] = [];

    if (fs.existsSync(appDir)) {
      const items = fs.readdirSync(appDir, { withFileTypes: true });
      
      for (const item of items) {
        if (item.isDirectory() && item.name !== 'api') {
          const pageFile = path.join(appDir, item.name, 'page.tsx');
          if (fs.existsSync(pageFile)) {
            pages.push(item.name);
          }
        }
      }
    }

    return NextResponse.json({
      pages,
      count: pages.length
    });

  } catch (error) {
    console.error('Error listing pages:', error);
    return NextResponse.json(
      { error: 'Failed to list pages' },
      { status: 500 }
    );
  }
} 