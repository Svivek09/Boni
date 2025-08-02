import React from 'react';

interface StatsBoxProps {
  value: string | number;
  label: string;
  className?: string;
}

const StatsBox: React.FC<StatsBoxProps> = ({ 
  value, 
  label, 
  className = '' 
}) => {
  return (
    <div className={`p-3 border rounded bg-purple-50 border-purple-200 text-purple-800 ${className}`}>
      <div className="text-center">
        <div className="text-xl font-bold">{value}</div>
        <div className="text-xs">{label}</div>
      </div>
    </div>
  );
};

export default StatsBox; 