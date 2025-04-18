import React from "react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export const WhatsAppButton = ({ phoneNumber, message = "Hello, I'd like to inquire about your services." }: WhatsAppButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed right-6 bottom-24 z-50 bg-[#25D366] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
};