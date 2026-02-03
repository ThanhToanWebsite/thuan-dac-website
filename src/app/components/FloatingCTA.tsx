import { Phone, MessageCircle, Facebook, MapPin } from "lucide-react";

export const FloatingCTA = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* Facebook Button */}
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(29,78,216,0.6)] hover:scale-110 hover:bg-blue-600 transition-all border-2 border-white/20 animate-bounce-slow"
                title="Facebook"
            >
                <Facebook size={28} />
            </a>

            {/* Messenger Button */}
            <a
                href="https://m.me/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-110 hover:bg-blue-400 transition-all border-2 border-white/20"
                title="Messenger"
            >
                <MessageCircle size={28} />
            </a>

            {/* Zalo Button */}
            <a
                href="https://zalo.me/0945142345"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-cyan-600 rounded-full flex items-center justify-center text-white font-black text-xs shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:scale-110 hover:bg-cyan-500 transition-all border-2 border-white/20 animate-bounce-slow"
                title="Chat Zalo"
            >
                Zalo
            </a>

            {/* Google Maps Button */}
            <a
                href="https://maps.app.goo.gl/cz1etWP9rdgK94Ys9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(239,68,68,0.6)] hover:scale-110 hover:bg-red-500 transition-all border-2 border-white/20"
                title="Google Maps"
            >
                <MapPin size={28} />
            </a>

            {/* Phone Button */}
            <a
                href="tel:0945142345"
                className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:scale-110 hover:bg-green-500 transition-all border-2 border-white/20 animate-pulse"
                title="Gọi ngay"
            >
                <Phone size={28} />
            </a>
        </div>
    );
};
