import React from 'react';
import { Medal, Users, TrendingUp  } from 'lucide-react';

const TradingStats: React.FC = () => {
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-xl shadow border-2">
      <span className="text-gray-600 font-semibold mb-6">Trading Statistics</span>
      <div className='flex justify-center items-center'>
            <div className="mt-12 w-5xl flex flex-col md:flex-row justify-between gap-6 text-center">

                {/* TRADES */}
                <div className="flex flex-row md:flex-col items-center justify-between md:items-center md:justify-center w-full md:w-auto gap-2">
                    <div className="flex items-center gap-2">
                    <TrendingUp className="text-green-500 w-5 h-5" />
                    <span className="text-sm font-semibold text-gray-800">TRADES</span>
                    </div>
                    <span className="px-3 py-1 text-sm text-green-600 bg-green-100 rounded-full font-bold">
                    98%
                    </span>
                </div>

                {/* COMPLETION */}
                <div className="flex flex-row md:flex-col items-center justify-between md:items-center md:justify-center w-full md:w-auto gap-2">
                    <div className="flex items-center gap-2">
                    <Medal className="text-blue-500 w-5 h-5" />
                    <span className="text-sm font-semibold text-gray-800">COMPLETION</span>
                    </div>
                    <span className="px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full font-bold">
                    500+
                    </span>
                </div>

                {/* MORE NUMBER */}
                <div className="flex flex-row md:flex-col items-center justify-between md:items-center md:justify-center w-full md:w-auto gap-2">
                    <div className="flex items-center gap-2">
                    <Users className="text-purple-500 w-5 h-5" />
                    <span className="text-sm font-semibold text-gray-800">MORE NUMBER</span>
                    </div>
                    <span className="px-3 py-1 text-sm text-purple-600 bg-purple-100 rounded-full font-bold">
                    Active
                    </span>
                </div>

            </div>

        </div>
    </div>
  );
};

export default TradingStats;
