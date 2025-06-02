import React from 'react';
import { MessageSquare, MessageCircle  } from 'lucide-react';

interface QrSectionProps {
  binanceQrUrl: string;
  whatsappQrUrl: string;
}

const QrSection: React.FC<QrSectionProps> = ({ binanceQrUrl, whatsappQrUrl }) => {
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-4">

      <div className="border-2 border-[#e9b30a60] rounded-lg p-6 flex flex-col items-center text-center shadow">
        <span className="text-cyan-800 font-bold text-lg mb-6">SCAN TO ORDER</span>
        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">BINANCE QR CODE</span>
        <div className="w-32 h-32 overflow-hidden">
          <img
            src={binanceQrUrl}
            alt="Binance QR Code"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="border-2 border-green-200 rounded-lg p-6 flex flex-col items-center text-center shadow">
        <span className='text-green-800 font-bold text-lg mb-6'>SCAN TO CHAT</span>
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">WHATSAPP QR CODE</span>
          {/* <MessageCircle  className="w-5 h-5" /> */}
        <div className="w-32 h-32 overflow-hidden">
          <img
            src={whatsappQrUrl}
            alt="WhatsApp QR Code"
            className="w-full h-full object-cover"
          />
        </div>
        {/* <p className="mt-2 text-sm text-gray-400">WhatsApp QR</p> */}
      </div>
    </div>
  );
};

export default QrSection;
