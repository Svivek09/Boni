import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-purple-600 text-white p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-white">Boni Bot</h1>
          <p className="text-sm text-purple-100">Dynamic Page Creator</p>
        </div>
      </header>

      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Create Pages with API
          </h1>
          <p className="text-center text-gray-700 mb-6">
            Send JSON to create new pages instantly
          </p>
          <div className="text-center">
            <a 
              href="#demo-pages" 
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
            >
              View Demo Pages
            </a>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border p-4 rounded">
              <h3 className="font-bold mb-2 text-gray-900">5 Components</h3>
              <p className="text-sm text-gray-700">Card, ImageBlock, TextSection, StatsBox, CTA</p>
            </div>
            <div className="border p-4 rounded">
              <h3 className="font-bold mb-2 text-gray-900">Instant Creation</h3>
              <p className="text-sm text-gray-700">Create pages via POST API</p>
            </div>
            <div className="border p-4 rounded">
              <h3 className="font-bold mb-2 text-gray-900">JSON Config</h3>
              <p className="text-sm text-gray-700">Define pages with JSON</p>
            </div>
          </div>
        </div>
      </section>

      <section id="demo-pages" className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
            Demo Pages
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border p-4 rounded bg-white">
              <h3 className="font-bold mb-2 text-gray-900">Simple Page</h3>
              <p className="text-sm text-gray-700 mb-3">Basic page with just text content</p>
              <Link 
                href="/simple-page" 
                className="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700"
              >
                View Page
              </Link>
            </div>
            
            <div className="border p-4 rounded bg-white">
              <h3 className="font-bold mb-2 text-gray-900">Page with Image</h3>
              <p className="text-sm text-gray-700 mb-3">Page that shows an image</p>
              <Link 
                href="/page-with-image" 
                className="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700"
              >
                View Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-300 mb-4">
              Built with Next.js for Boni Bot
            </p>
            <div className="flex justify-center items-center space-x-6">
              <Link href="/api/pages" className="text-purple-400 hover:text-purple-300 transition-colors">
                API
              </Link>
              <span className="text-gray-400">•</span>
              <a href="https://github.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
