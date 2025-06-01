import React from 'react';
import { FileText, ExternalLink, Check } from 'lucide-react';

const GoogleFormSection: React.FC = () => {
  return (
    <div className="mx-auto p-6 bg-green-50 rounded-xl border-2 border-green-200 my-4">
      <div className="text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
          <FileText className="text-green-600 w-5 h-5" />
          <div className="text-green-700 font-semibold text-lg">OPEN GOOGLE FORM</div>
        </div>
        <p className="text-gray-500 text-sm mb-4 font-[500]">
          Complete our quick assessment form to get started with trading
        </p>

        <a
          href="https://forms.gle/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transition text-white text-sm w-full font-medium py-3 px-6 rounded"
        >
          <ExternalLink className="w-4 h-4" />
          Open Form
        </a>

        <div className='flex justify-center'>
            <div className="mt-4 mb-10 text-xs text-gray-600 space-y-1 flex flex-col justify-start items-start">
                <div className="flex justify-center items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" /> Quick 2 minute setup
                </div>
                <div className="flex justify-center items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" /> Secure data collection
                </div>
                <div className="flex justify-center items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" /> Instant verification
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleFormSection;
