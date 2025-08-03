import { supabase, isSupabaseConfigured } from './supabase';

interface ComponentConfig {
  type: string;
  props: Record<string, unknown>;
}

const memoryStorage = new Map<string, ComponentConfig[]>();

// Initialize with existing pages
memoryStorage.set('simple-page', [
  {
    type: 'TextSection',
    props: {
      title: 'Simple Page',
      content: 'This is a simple page created with our API. It only has text content.',
      className: 'text-left text-center'
    }
  },
  {
    type: 'TextSection',
    props: {
      title: 'How it works',
      content: 'Send a POST request to /api/pages with JSON containing your page content. The page will be created instantly and accessible at /simple-page',
      className: 'text-left '
    }
  },
  {
    type: 'CTA',
    props: {
      text: 'Back to Home',
      href: '/',
      variant: 'primary',
      size: 'medium'
    }
  }
]);

memoryStorage.set('page-with-image', [
  {
    type: 'TextSection',
    props: {
      title: 'Page with Image',
      content: 'This page shows an image component.',
      className: 'text-center'
    }
  },
  {
    type: 'ImageBlock',
    props: {
      src: 'https://via.placeholder.com/600x400',
      alt: 'Sample Image',
      caption: 'This is a sample image'
    }
  }
]);

export async function createPage(slug: string, components: ComponentConfig[]) {
  if (isSupabaseConfigured) {
    const { error } = await supabase
      .from('pages')
      .upsert({ slug, components: JSON.stringify(components) });
    
    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }
  } else {
    memoryStorage.set(slug, components);
  }
  
  return { success: true };
}

export async function getPage(slug: string): Promise<ComponentConfig[] | null> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('pages')
        .select('components')
        .eq('slug', slug)
        .single();
      
      if (error) {
        console.error('Supabase error:', error);
        return null;
      }
      
      if (!data) {
        return null;
      }
      
      return JSON.parse(data.components);
    } catch (err) {
      console.error('Error fetching page:', err);
      return null;
    }
  } else {
    return memoryStorage.get(slug) || null;
  }
}

export async function getAllPages(): Promise<string[]> {
  if (isSupabaseConfigured) {
    const { data, error } = await supabase
      .from('pages')
      .select('slug');
    
    if (error || !data) {
      return [];
    }
    
    return data.map(row => row.slug);
  } else {
    return Array.from(memoryStorage.keys());
  }
} 