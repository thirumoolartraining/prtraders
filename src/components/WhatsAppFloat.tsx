import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your camphor products. Can you provide more information?");
    window.open(`https://wa.me/918122800658?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={20} className="sm:w-6 sm:h-6" />
    </button>
  );
};

export default WhatsAppFloat;