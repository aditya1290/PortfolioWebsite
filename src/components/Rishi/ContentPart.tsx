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
      <div className="border-2 rounded-xl p-6">
        <div className="text-xl font-semibold text-gray-800 mb-2">CONTENT & DESCRIPTION</div>
        <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">From CHAT GPT</span>
        <div className='text-gray-500 font-[400]'>
            <p className="text-sm mb-3">
                Welcome to our premium cryptocurrency trading platform. We provide secure,
                reliable, and efficient trading services for digital assets with
                industry-leading security measures and customer support.
            </p>
            <p className="text-sm mb-3">
                Our platform offers seamless integration with major exchanges, real-time market
                data, and advanced trading tools to help you make informed investment decisions.
            </p>
            <p className="text-sm">
                Join thousands of satisfied traders who trust our platform for their cryptocurrency
                trading needs. Experience the difference of professional-grade trading
                infrastructure.
            </p>
        </div>
      </div>

      {/* Our Priority */}
      <div className="border-2 rounded-xl p-6">
        <div className="text-xl font-semibold text-gray-800 mb-4">OUR PRIORITY</div>

        <div className="space-y-3 font-semibold">

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
            <ShieldCheck className="text-blue-500 w-5 h-5 mt-1" />
            <div>
              <h4 className="font-semibold text-sm">Security & Safety</h4>
              <p className="text-xs text-gray-500">Advanced security protocols</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
            <BadgeCheck className="text-blue-500 w-5 h-5 mt-1" />
            <div>
              <h4 className="font-semibold text-sm">KYC Mandatory</h4>
              <p className="text-xs text-gray-500">Know Your Customer verification</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
            <Landmark className="text-blue-500 w-5 h-5 mt-1" />
            <div>
              <h4 className="font-semibold text-sm">Pattern Government Policy</h4>
              <p className="text-xs text-gray-500">Compliance with regulations</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
            <Repeat2 className="text-blue-500 w-5 h-5 mt-1" />
            <div>
              <h4 className="font-semibold text-sm">Safe Transfer</h4>
              <p className="text-xs text-gray-500">Secure transaction processing</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContentPrioritySection;
