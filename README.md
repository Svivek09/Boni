# Boni Bot - Dynamic Page Creator

A simple Next.js app that creates pages using API calls.

## What it does

- Create pages with POST API
- 5 components: Card, ImageBlock, TextSection, StatsBox, CTA
- JSON configuration
- Basic design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm run dev
```

3. Create demo pages:
```bash
npm run create-demos
```

Visit http://localhost:3000 to see the app.

## Environment Variables

For deployment, you may need these environment variables:

```bash
# Required for production
NODE_ENV=production

# Optional: Custom API URL (for scripts)
API_URL=https://your-domain.com/api/pages

# Optional: Custom domain
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## API

### POST /api/pages

Create a new page.

**Request:**
```json
{
  "slug": "my-page",
  "components": [
    {
      "type": "TextSection",
      "props": {
        "title": "Welcome",
        "content": "This is my page",
        "className": "text-center"
      }
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Page created successfully at /my-page",
  "url": "/my-page"
}
```

### GET /api/pages

List all pages.

## API URL Usage

The API runs on the same domain as your app:

- **Local**: `http://localhost:3000/api/pages`
- **Render**: `https://your-app.onrender.com/api/pages`
- **Netlify**: `https://your-app.netlify.app/api/pages`
- **Vercel**: `https://your-app.vercel.app/api/pages`

## Components

### Card
- `title` - Card title
- `content` - Card content  
- `imageUrl` - Image URL
- `imageAlt` - Image alt text

### ImageBlock
- `src` - Image source
- `alt` - Image alt text
- `caption` - Image caption

### TextSection
- `title` - Section title
- `content` - Text content
- `className` - CSS classes

### StatsBox
- `value` - Stat value
- `label` - Stat label

### CTA
- `text` - Button text
- `href` - Link URL
- `variant` - "primary", "secondary", "outline"
- `size` - "small", "medium", "large"

## Example

```bash
curl -X POST http://localhost:3000/api/pages \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "test-page",
    "components": [
      {
        "type": "TextSection",
        "props": {
          "title": "Hello",
          "content": "This is a test page",
          "className": "text-center"
        }
      }
    ]
  }'
```

## Demo Pages

- http://localhost:3000/simple-page
- http://localhost:3000/page-with-image

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- React 19

## Deploy

### Render
1. Fork this repo
2. Connect to Render
3. Build Command: `npm install && npm run build`
4. Start Command: `npm start`
5. Environment Variables: `NODE_ENV=production`

### Netlify
1. Fork this repo
2. Connect to Netlify
3. Build Command: `npm run build`
4. Publish Directory: `.next`
5. Environment Variables: `NODE_ENV=production`

### Vercel
1. Fork this repo
2. Connect to Vercel
3. Deploy automatically
4. Environment Variables: `NODE_ENV=production`

## Files

```
boni-app/
├── src/app/
│   ├── api/pages/route.ts    # API endpoint
│   ├── page.tsx              # Homepage
│   ├── simple-page/          # Demo page
│   └── page-with-image/      # Demo page
├── src/components/
│   ├── Card.tsx
│   ├── ImageBlock.tsx
│   ├── TextSection.tsx
│   ├── StatsBox.tsx
│   ├── CTA.tsx
│   └── index.ts
├── scripts/
│   └── create-demo-pages.js  # Demo creation script
├── render.yaml               # Render config
├── netlify.toml             # Netlify config
├── vercel.json              # Vercel config
└── next.config.ts           # Next.js config
```

## Scripts

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run create-demos` - Create demo pages

## License

MIT License

---

Made with Next.js for Boni Bot
