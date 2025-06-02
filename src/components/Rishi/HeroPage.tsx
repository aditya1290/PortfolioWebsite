import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className='my-4 bg-gradient-to-r from-[#FFC107] via-[#FFF3BF] to-[#FFC107] text-white px-6 py-3 rounded-xl font-bold shadow-md rounded-lg'>
      <div className='flex h-[25vh] flex-col justify-center items-center'>
        <span className='text-black text-2xl font-semibold'>SILVER BINANCE MERCHANT</span>
        <span className='text-gray-700 mt-2 text-lg'>rishi_rich_</span>
      </div>
    </div>
  );
};

export default HeroSection;
