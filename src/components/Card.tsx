import React from 'react';
import Image from 'next/image';

interface CardProps {
  title?: string;
  content?: string;
  className?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  className = '',
  imageUrl,
  imageAlt
}) => {
  return (
    <div className={`border p-4 rounded ${className}`}>
      {imageUrl && (
        <div className="mb-3">
          <Image
            src={imageUrl}
            alt={imageAlt || title || 'Card image'}
            width={600}
            height={300}
            className="w-full h-32 object-cover rounded"
          />
        </div>
      )}
      {title && (
        <h3 className="font-bold mb-2 text-gray-900">{title}</h3>
      )}
      {content && (
        <p className="text-gray-700 text-sm">{content}</p>
      )}
    </div>
  );
};

export default Card; 