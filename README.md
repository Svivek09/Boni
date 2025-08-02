# Boni Bot - Page Creator

A simple Next.js app that creates pages using API calls.

## Features

- 5 components: Card, ImageBlock, TextSection, StatsBox, CTA
- Create pages with POST API
- JSON configuration
- Simple design

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
        "alignment": "center"
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
- `variant` - "default", "large", "small"
- `alignment` - "left", "center", "right"

### StatsBox
- `value` - Stat value
- `label` - Stat label
- `color` - "blue", "green", "red", "yellow", "purple"

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
          "alignment": "center"
        }
      }
    ]
  }'
```

## Demo Pages

- http://localhost:3000/welcome
- http://localhost:3000/product-showcase

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- React 19
