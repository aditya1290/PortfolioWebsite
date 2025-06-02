import React from 'react';
import {
  ShieldCheck,
  BadgeCheck,
  Landmark,
  Repeat2,
} from 'lucide-react';

const ContentPrioritySection: React.FC = () => {
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Content & Description */}
      <div className="border-2 rounded-xl p-6 shadow">
        <div className="text-xl font-semibold text-gray-800 mb-2">CONTENT & DESCRIPTION</div>
        <div className='text-gray-500 font-[400]'>
          <p className='font-[500] mb-3 font-serif text-lg text-gray-600'>💎 Rishi Jagariya | Verified Silver Merchant on Binance P2P</p>
          
          <p className='text-sm font-normal font-serif mb-1'>Hello! I'm Rishi Jagariya, a dedicated Binance P2P trader and Verified Silver Merchant, recognized for maintaining a 98%+ trade completion rate and consistently high monthly volumes.</p>
          <p className='text-sm font-normal font-serif mb-3'>With over 8,000 successful trades, I specialize in USDT to INR transactions, offering swift, secure, and reliable services.</p>

          <div className='font-[500] mb-1 font-serif text-md underline text-gray-700'>Why Trade with Me?</div>
          <p className='text-sm font-normal font-serif mb-1'>
            <span className='font-black'>Verified Silver Merchant</span>: Earned through consistent trading volume exceeding 200,000 USDT monthly and a trade completion rate above 98%, ensuring trust and reliability.
          </p>
            <p className='text-sm font-normal font-serif mb-1'><span className='font-black'>Fast Response Times</span>: Average release time under 5 minutes, facilitating quick and efficient transactions.</p>

          <p className='text-sm font-normal font-serif mb-1'><span className='font-black'>Secure Transactions</span>: All trades protected by Binance's escrow service, ensuring safety for both parties.</p>

          <p className='text-sm font-normal font-serif mb-3'><span className='font-black'>24/7 Availability</span>: Committed to providing round-the-clock support for a seamless trading experience.</p>
           
          <p className='text-sm font-normal font-serif mb-1'>As a Silver Merchant, I benefit from a 30% fee discount on all fiat markets, allowing me to offer competitive rates to my clients. Whether you're buying or selling USDT in INR, you can count on a smooth, transparent, and professional transaction.
          </p>
        </div>
      </div>

      {/* Our Priority */}
      <div className="border-2 rounded-xl p-6 shadow">
        <div className="text-xl font-semibold text-gray-800 mb-4">OUR PRIORITY</div>

        <div className="space-y-3 font-semibold">

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
            <ShieldCheck className="text-blue-500 w-5 h-5 mt-1" />
            <div>
              <h4 className="font-semibold text-sm">Security & Safety</h4>
              <p className="text-xs text-gray-500">Advance security protocol, and professional conversation</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
            <BadgeCheck className="text-blue-500 w-5 h-5 mt-1" />
            <div>
              <h4 className="font-semibold text-sm">KYC Mandatory</h4>
              <p className="text-xs text-gray-500">Know your customer verification, with advanced tools including face matching</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
            <Landmark className="text-blue-500 w-5 h-5 mt-1" />
            <div>
              <h4 className="font-semibold text-sm">Pattern Government Policy</h4>
              <p className="text-xs text-gray-500">Compliance with government regulations - 1% TDS deduction and proper taxation</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
            <Repeat2 className="text-blue-500 w-5 h-5 mt-1" />
            <div>
              <h4 className="font-semibold text-sm">Safe Transfer</h4>
              <p className="text-xs text-gray-500">Secure transaction processing - we do extensive security measures to ensure safe funds and easy trading</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContentPrioritySection;
