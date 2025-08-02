import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const API_URL = process.env.API_URL || 'http://localhost:3000/api/pages';

async function createPage(pageData) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pageData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.error || response.statusText}`);
    }

    const data = await response.json();
    console.log(`Created page: ${data.url}`);
  } catch (error) {
    console.error(`Failed to create page: ${pageData.slug}`, error);
  }
}

async function createDemoPages() {
  console.log('Creating demo pages...');

  const simplePage = {
    slug: 'simple-page',
    components: [
      {
        type: 'TextSection',
        props: {
          title: 'Simple Page',
          content: 'This is a simple page created with our API. It only has text content.',
          className: 'text-center'
        }
      },
      {
        type: 'TextSection',
        props: {
          title: 'How it works',
          content: 'Send a POST request to /api/pages with JSON containing your page content. The page will be created instantly and accessible at /simple-page'
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
    ]
  };

  const pageWithImage = {
    slug: 'page-with-image',
    components: [
      {
        type: 'TextSection',
        props: {
          title: 'Page with Image',
          content: 'This page demonstrates how to include images in your dynamically created pages.',
          className: 'text-center'
        }
      },
      {
        type: 'ImageBlock',
        props: {
          src: 'https://picsum.photos/800/400',
          alt: 'Sample image for demo',
          caption: 'This image was added using the ImageBlock component'
        }
      },
      {
        type: 'TextSection',
        props: {
          title: 'Image Features',
          content: 'The ImageBlock component supports: captions, alt text, and responsive sizing. Images are automatically optimized by Next.js.'
        }
      },
      {
        type: 'CTA',
        props: {
          text: 'Go Back',
          href: '/',
          variant: 'primary',
          size: 'medium'
        }
      }
    ]
  };

  const oldPagesDir = path.join(process.cwd(), 'src', 'app');
  const oldSlugs = ['welcome', 'product-showcase'];
  oldSlugs.forEach(slug => {
    const pageDir = path.join(oldPagesDir, slug);
    if (fs.existsSync(pageDir)) {
      fs.rmSync(pageDir, { recursive: true, force: true });
      console.log(`Removed old page directory: ${pageDir}`);
    }
  });

  await createPage(simplePage);
  await createPage(pageWithImage);

  console.log('Demo pages created successfully!');
  console.log('You can now visit:');
  console.log('   - http://localhost:3000/simple-page (Simple page as requested)');
  console.log('   - http://localhost:3000/page-with-image (Page with image as requested)');
}

createDemoPages(); 