import { Facebook, MessageCircle, MapPin, Phone, ExternalLink } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-24 relative overflow-hidden">
      {/* Schematic lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">

          {/* Brand Specs */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <img
                src={logo}
                alt="Thuận Đắc Logo"
                className="h-12 w-auto filter drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
              />
              <div className="flex flex-col border-l border-white/10 pl-4">
                <span className="font-black text-2xl text-white tracking-tighter uppercase">
                  THUẬN ĐẮC
                </span>
                <span className="text-[10px] font-mono tracking-[0.4em] text-cyan-400 font-bold">
                  QUẢNG CÁO & NỘI THẤT
                </span>
              </div>
            </div>

            <p className="text-lg font-medium text-gray-400 dark:text-gray-500 max-w-md leading-relaxed mb-10">
              Tiên phong trong giải pháp cơ khí quảng cáo và nội thất sáng tạo. Chúng tôi vận hành với tư duy kỹ thuật chính xác và tầm nhìn nghệ thuật đột phá.
            </p>

            <div className="flex gap-4">
              {[
                { icon: <Facebook size={18} />, href: "https://facebook.com", label: "Facebook" },
                { icon: <MessageCircle size={18} />, href: "https://m.me/yourpage", label: "Messager" },
                { icon: "Zalo", href: "https://zalo.me/0945142345", label: "Chat Zalo" },
                { icon: <MapPin size={18} />, href: "https://maps.app.goo.gl/cz1etWP9rdgK94Ys9", label: "Google Maps" },
                { icon: <Phone size={18} />, href: "tel:0945142345", label: "Gọi Ngay" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group"
                  title={social.label}
                >
                  <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h4 className="font-mono text-[10px] font-bold text-white uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" /> Các Dịch Vụ
              </h4>
              <ul className="space-y-4">
                {["Thiết kế Bảng hiệu", "In ấn Kỹ thuật số", "Thi công Alu", "Sản xuất Nội thất"].map(item => (
                  <li key={item}>
                    <a href="#" className="font-bold text-sm text-gray-400 dark:text-gray-500 hover:text-white transition-colors flex items-center gap-2 group">
                      <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[10px] font-bold text-white uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" /> Thông Tin Liên Hệ
              </h4>
              <ul className="space-y-6">
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Hotline 24/7</span>
                  <a href="tel:0945142345" className="text-white font-black text-lg hover:text-cyan-400 transition-colors">0945 142 345</a>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Trụ Sở Chính</span>
                  <p className="text-white font-bold text-sm leading-relaxed">Số 21, đường 3/2, P. Tân An, TP Cần Thơ</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} CÔNG TY THUẬN ĐẮC / ĐÃ ĐĂNG KÝ BẢN QUYỀN / HỆ THỐNG TRỰC TUYẾN
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-mono text-gray-600 hover:text-cyan-500 uppercase tracking-widest transition-colors">Chính sách bảo mật</a>
            <a href="#" className="text-[10px] font-mono text-gray-600 hover:text-cyan-500 uppercase tracking-widest transition-colors">Tiêu chuẩn an toàn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};