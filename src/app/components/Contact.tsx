import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-background border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-cyan-600 dark:text-cyan-400 font-bold tracking-[0.2em] uppercase text-sm mb-3 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
              Liên Hệ
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-foreground mb-6 uppercase">
              Kết Nối Với{" "}
              <span className="text-cyan-600 dark:text-cyan-400">Thuận Đắc</span>
            </h3>
            <p className="text-foreground/70 mb-10 text-lg">
              Hãy để lại thông tin hoặc liên hệ trực tiếp với
              chúng tôi để được tư vấn miễn phí. Chúng tôi luôn
              sẵn sàng lắng nghe 24/7.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="bg-secondary p-4 rounded-full text-cyan-600 dark:text-cyan-400 border border-border group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase text-sm tracking-wide mb-1">
                    Địa chỉ
                  </h4>
                  <p className="text-foreground/60">
                    Số 21, đường 3/2, Phường Tân An, TP Cần Thơ,
                    Việt Nam
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="bg-secondary p-4 rounded-full text-cyan-600 dark:text-cyan-400 border border-border group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase text-sm tracking-wide mb-1">
                    Hotline
                  </h4>
                  <a
                    href="tel:0945142345"
                    className="text-2xl font-black text-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors tracking-tight"
                  >
                    0945 142 345
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="bg-secondary p-4 rounded-full text-cyan-600 dark:text-cyan-400 border border-border group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase text-sm tracking-wide mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:thuandac@quangcaoinannoithatcantho.com"
                    className="text-foreground/60 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    thuandac@quangcaoinannoithatcantho.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="bg-secondary p-4 rounded-full text-cyan-600 dark:text-cyan-400 border border-border group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase text-sm tracking-wide mb-1">
                    Giờ làm việc
                  </h4>
                  <p className="text-foreground/60">
                    Thứ 2 - Thứ 7: 8:00 - 17:30
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-3xl shadow-2xl border border-border backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px] pointer-events-none"></div>

            <h4 className="text-2xl font-bold text-foreground mb-6 uppercase tracking-wide">
              Gửi yêu cầu tư vấn
            </h4>
            <form
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-cyan-600 dark:text-cyan-400 mb-2 uppercase tracking-wider drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"
                  >
                    Họ tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-background dark:bg-slate-900/80 rounded-lg border-2 border-cyan-500/30 focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(6,182,212,0.4)] outline-none transition-all placeholder:text-muted-foreground text-foreground backdrop-blur-sm"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold text-purple-600 dark:text-purple-400 mb-2 uppercase tracking-wider drop-shadow-[0_0_5px_rgba(192,132,252,0.5)]"
                  >
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-background dark:bg-slate-900/80 rounded-lg border-2 border-purple-500/30 focus:border-purple-500 focus:shadow-[0_0_20px_rgba(168,85,247,0.4)] outline-none transition-all placeholder:text-muted-foreground text-foreground backdrop-blur-sm"
                    placeholder="09xx xxx xxx"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-xs font-bold text-green-600 dark:text-green-400 mb-2 uppercase tracking-wider drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]"
                >
                  Dịch vụ quan tâm
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-background dark:bg-slate-900/80 rounded-lg border-2 border-green-500/30 focus:border-green-500 focus:shadow-[0_0_20px_rgba(34,197,94,0.4)] outline-none transition-all text-foreground backdrop-blur-sm"
                >
                  <option
                    value=""
                    className="bg-background dark:bg-slate-900 text-muted-foreground"
                  >
                    Chọn dịch vụ
                  </option>
                  <option
                    value="quang-cao"
                    className="bg-background dark:bg-slate-900"
                  >
                    Quảng Cáo & Bảng Hiệu
                  </option>
                  <option
                    value="in-an"
                    className="bg-background dark:bg-slate-900"
                  >
                    In Ấn Kỹ Thuật Số
                  </option>
                  <option
                    value="noi-that"
                    className="bg-background dark:bg-slate-900"
                  >
                    Thiết Kế Nội Thất
                  </option>
                  <option value="khac" className="bg-background dark:bg-slate-900">
                    Khác
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-red-600 dark:text-red-400 mb-2 uppercase tracking-wider drop-shadow-[0_0_5px_rgba(248,113,113,0.5)]"
                >
                  Nội dung
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-background dark:bg-slate-900/80 rounded-lg border-2 border-red-500/30 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.4)] outline-none transition-all placeholder:text-muted-foreground text-foreground backdrop-blur-sm"
                  placeholder="Tôi cần tư vấn về..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] uppercase tracking-widest text-sm"
              >
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.3)] border border-cyan-500/30">
          <iframe
            src="https://www.google.com/maps?q=THUẬN ĐẮC CTY QUẢNG CÁO - NỘI THẤT&z=18&output=embed"
            //src="https://maps.google.com/maps?q=10.0125297,105.7553028&z=18&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="THUẬN ĐẮC CTY QUẢNG CÁO - NỘI THẤT"
          ></iframe>
        </div>
      </div>
    </section >
  );
};