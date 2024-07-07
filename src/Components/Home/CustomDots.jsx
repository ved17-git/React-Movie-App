import React from 'react';

const CustomDots = ({ onClick, active }) => {
  return (
    <button
      className={`w-6 h-2 mx-1 rounded-full sm:px-[-16vh] ${
        active ? 'bg-[#E60000]' : 'bg-gray-300'
      }`}
      onClick={onClick}
    />
  );
};

export default CustomDots;
