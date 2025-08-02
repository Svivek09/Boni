import React from 'react';

interface TextSectionProps {
  title?: string;
  content: string;
  className?: string;
}

const TextSection: React.FC<TextSectionProps> = ({
  title,
  content,
  className = ''
}) => {
  return (
    <div className={`text-left ${className}`}>
      {title && (
        <h2 className="font-bold mb-2 text-gray-900 text-base">
          {title}
        </h2>
      )}
      <div className="text-sm text-gray-700">
        {content}
      </div>
    </div>
  );
};

export default TextSection; 