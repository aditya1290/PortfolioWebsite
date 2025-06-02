import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  FileText,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export const ContactLegalSection: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 w-full">
      {/* Legal Documents: shown first on mobile */}
      <div className="order-1 md:order-2 rounded-xl border-2 p-6 bg-white w-full shadow">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="text-gray-600" size={20} />
          <div className="text-lg font-semibold text-gray-800">LEGAL DOCUMENT LINKS</div>
        </div>
        <ul className="space-y-3 font-[500] text-sm">
          <li className="border p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <Link href={"https://www.termsfeed.com/live/b2cd9a71-f380-49dc-971c-9f1cfa79cdc5"} className="flex justify-between items-center" target="_blank">
                <span>Privacy Policy</span> 
                <ExternalLink size={20} className="text-black" />
            </Link>
          </li>
          <li className="border p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <Link href={"https://www.termsfeed.com/live/2a9b45c7-6547-4f98-a62c-f552189cd812"} className="flex justify-between items-center" target="_blank">
                <span>Terms & Conditions</span>
                <ExternalLink size={20} className="text-black" />
            </Link>        
          </li>
          <li className="border p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <Link href={""} className="flex justify-between items-center" target="_blank">
                <span>Returns & Refunds</span>
                <ExternalLink size={20} className="text-black" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact Details: shown second on mobile */}
      <div className="order-2 md:order-1 rounded-xl border-2 p-6 bg-white w-full shadow">
        <div className="flex items-center gap-2 mb-6">
          <Phone className="text-gray-600" size={20} />
          <div className="text-lg font-semibold text-gray-800">CONTACT DETAILS</div>
        </div>
        <div className="space-y-4 font-[400] text-sm">
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-blue-600" />
            <div>
              <p className="font-semibold">Email</p>
              <p>rishi.jagariya@outlook.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} className="text-green-600" />
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p>+91 8483097500</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-red-600" />
            <div>
              <p className="font-semibold">Address</p>
              <p className="mb-1">1003, Tower A, venkatesh Graffiti Keshav Nagar Pune Maharashtra - 411036</p>
              <p>Rishi Jagariya Finserv, 9th floor,
91springboard, Sadanand business centre,
NH48, service road, Baner, Pune - 411045</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
