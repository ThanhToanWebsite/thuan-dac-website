import { motion } from "motion/react";
import {
  Printer,
  Megaphone,
  CalendarRange,
  Cog,
  ArrowRight,
} from "lucide-react";

import imgKimYFacade from "@/assets/projects/project-kim-y-facade.png";
import imgTrangDai from "@/assets/projects/project-trang-dai.jpg";
import imgKaraoke from "@/assets/projects/project-karaoke.jpg";

const services = [
  {
    id: 1,
    title: "Quảng Cáo & Bảng Hiệu",
    description:
      "Thiết kế & thi công Pano, bảng hiệu, hộp đèn LED, mặt dựng Alu, chữ nổi các loại. Cắt dán decal, gia công CNC/Laser chuyên nghiệp.",
    icon: <Megaphone className="w-8 h-8 text-white" />,
    image: imgTrangDai,
    color: "from-red-600 to-red-800",
    glow: "group-hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] group-hover:border-red-500",
    border: "border-white/10 bg-black/40 backdrop-blur-md",
    span: "md:col-span-2 md:row-span-2 h-[500px]", // Hero Service
  },
  {
    id: 2,
    title: "In Ấn & Văn Phòng Phẩm",
    description:
      "Dịch vụ in ấn khổ lớn, catalogue, brochure. Mua bán văn phòng phẩm, sách báo.",
    icon: <Printer className="w-8 h-8 text-white" />,
    image:
      "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?auto=format&fit=crop&q=80&w=1080",
    color: "from-cyan-500 to-blue-600",
    glow: "group-hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] group-hover:border-cyan-500",
    border: "border-white/10 bg-black/40 backdrop-blur-md",
    span: "md:col-span-1 h-[240px]",
  },
  {
    id: 4,
    title: "Cơ Khí & Nhà Tiền Chế",
    description:
      "Sản xuất, gia công cấu kiện kim loại, nhà tiền chế. Mua bán sắt, thép, nhôm.",
    icon: <Cog className="w-8 h-8 text-white" />,
    image: imgKimYFacade,
    color: "from-emerald-500 to-green-600",
    glow: "group-hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] group-hover:border-emerald-500",
    border: "border-white/10 bg-black/40 backdrop-blur-md",
    span: "md:col-span-1 h-[240px]",
  },
  {
    id: 3,
    title: "Tổ Chức Sự Kiện & Hội Nghị",
    description:
      "Tổ chức giới thiệu, xúc tiến thương mại. Dịch vụ trọn gói cho hội nghị, sự kiện.",
    icon: <CalendarRange className="w-8 h-8 text-white" />,
    image: imgKaraoke,
    color: "from-purple-500 to-pink-600",
    glow: "group-hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] group-hover:border-purple-500",
    border: "border-white/10 bg-black/40 backdrop-blur-md",
    span: "md:col-span-2 h-[240px]", // Wide Short Service
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background decoration - RGB Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-red-500/5 dark:bg-red-600/8 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-green-500/5 dark:bg-green-600/8 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-cyan-600 dark:text-cyan-400 font-bold tracking-[0.2em] uppercase text-sm mb-3 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
            Lĩnh Vực Hoạt Động
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">
            Dịch Vụ Của{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
              Chúng Tôi
            </span>
          </h3>
          <p className="text-lg text-foreground/60 font-light">
            Giải pháp toàn diện từ thiết kế, in ấn đến thi công
            lắp đặt và tổ chức sự kiện chuyên nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`bg-card rounded-3xl overflow-hidden border border-border transition-all duration-300 group ${service.glow} ${service.border} hover:-translate-y-2 relative flex flex-col ${service.span}`}
            >
              {/* Image Background for Card */}
              <div className="absolute inset-0 z-0">
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 dark:opacity-70 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-80`} />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 filter group-hover:brightness-110"
                />
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 p-8 h-full flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <div
                  className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h4 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                  {service.title}
                </h4>
                <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed text-sm md:text-base font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center text-cyan-400 font-bold hover:text-white transition-colors uppercase text-xs tracking-widest border-b border-cyan-500/50 pb-1 w-fit"
                >
                  Chi tiết <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};