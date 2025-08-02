import React from 'react';

interface CTAProps {
  text: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const CTA: React.FC<CTAProps> = ({
  text,
  href,
  variant = 'primary',
  size = 'medium',
  className = ''
}) => {
  const baseClasses = 'inline-block text-center font-medium rounded border';

  const variantClasses = {
    primary: 'bg-purple-600 text-white border-purple-600 hover:bg-purple-700',
    secondary: 'bg-gray-600 text-white border-gray-600 hover:bg-gray-700',
    outline: 'border-purple-600 text-purple-600 hover:bg-purple-50'
  };

  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <a
      href={href || '#'}
      className={classes}
    >
      {text}
    </a>
  );
};

export default CTA; 