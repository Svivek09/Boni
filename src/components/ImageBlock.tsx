import React from 'react';
import Image from 'next/image';

interface ImageBlockProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  rounded?: boolean;
}

const ImageBlock: React.FC<ImageBlockProps> = ({
  src,
  alt,
  className = '',
  caption,
  rounded = true
}) => {
  return (
    <div className={`${className}`}>
      <Image
        src={src}
        alt={alt}
        width={800}
        height={400}
        className={`w-full h-auto object-cover ${rounded ? 'rounded' : ''}`}
      />
      {caption && (
        <p className="text-sm text-gray-700 mt-2 text-center">{caption}</p>
      )}
    </div>
  );
};

export default ImageBlock; 