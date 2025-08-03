import { NextRequest, NextResponse } from 'next/server';
import { createPage, getAllPages } from '@/lib/database';

export const dynamic = 'force-dynamic';

interface ComponentConfig {
  type: string;
  props: Record<string, unknown>;
}

interface PageRequest {
  slug: string;
  components: ComponentConfig[];
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

    await createPage(slug, components);

    return NextResponse.json({
      success: true,
      url: `/${slug}`,
      message: `Page created successfully at /${slug}`,
      note: 'Page stored in database - instant access!'
    });

  } catch (error: unknown) {
    console.error('Error creating page:', error);
    return NextResponse.json(
      { error: 'Failed to create page' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const pages = await getAllPages();

    return NextResponse.json({
      pages,
      count: pages.length,
      note: 'Pages stored in database - instant access!'
    });

  } catch (error: unknown) {
    console.error('Error listing pages:', error);
    return NextResponse.json(
      { error: 'Failed to list pages' },
      { status: 500 }
    );
  }
} 