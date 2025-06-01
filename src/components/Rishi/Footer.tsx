import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  FileText,
  ExternalLink,
} from "lucide-react";

export const ContactLegalSection: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 w-full">
      {/* Legal Documents: shown first on mobile */}
      <div className="order-1 md:order-2 rounded-xl border p-6 bg-white w-full">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="text-gray-600" size={20} />
          <div className="text-lg font-semibold text-gray-800">LEGAL DOCUMENT LINKS</div>
        </div>
        <ul className="space-y-3 font-[500] text-sm">
          <li className="flex justify-between items-center border p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <span>Privacy Policy</span>
            <ExternalLink size={16} className="text-gray-500" />
          </li>
          <li className="flex justify-between items-center border p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <span>Terms & Conditions</span>
            <ExternalLink size={16} className="text-gray-500" />
          </li>
          <li className="flex justify-between items-center border p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <span>Returns & Refunds</span>
            <ExternalLink size={16} className="text-gray-500" />
          </li>
        </ul>
      </div>

      {/* Contact Details: shown second on mobile */}
      <div className="order-2 md:order-1 rounded-xl border p-6 bg-white w-full">
        <div className="flex items-center gap-2 mb-6">
          <Phone className="text-gray-600" size={20} />
          <div className="text-lg font-semibold text-gray-800">CONTACT DETAILS</div>
        </div>
        <div className="space-y-4 font-[400] text-sm">
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-blue-600" />
            <div>
              <p className="font-semibold">Email</p>
              <p>contact@fintech-platform.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} className="text-green-600" />
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-red-600" />
            <div>
              <p className="font-semibold">Address</p>
              <p>Financial District, New York</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
