import { motion } from "motion/react";
import { Shield, Zap, Award, Target } from "lucide-react";
import officeImg from "@/assets/office.png";

export const About = () => {
  const stats = [
    { label: "Máy móc hiện đại", icon: <Zap className="w-5 h-5" />, text: "Hệ thống in & gia công CNC/Laser cao cấp." },
    { label: "Thiết kế sáng tạo", icon: <Award className="w-5 h-5" />, text: "Ý tưởng đột phá, dẫn đầu xu hướng thị trường." },
    { label: "Đúng tiến độ", icon: <Target className="w-5 h-5" />, text: "Quy trình vận hành chuẩn, thi công nhanh chóng." },
    { label: "Bảo hành dài hạn", icon: <Shield className="w-5 h-5" />, text: "Cam kết chất lượng vật liệu và hậu mãi tận tâm." },
  ];

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* Image Side with Industrial Frame */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-4 border border-foreground/10 dark:border-white/10 rounded-[3rem] bg-foreground/5 dark:bg-white/5 backdrop-blur-sm"
            >
              {/* Decorative Brackets */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500 rounded-tl-[3rem] -translate-x-2 -translate-y-2" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500 rounded-br-[3rem] translate-x-2 translate-y-2" />

              <div className="relative rounded-[2.5rem] overflow-hidden group">
                <img
                  src={officeImg}
                  alt="Đội ngũ Thuận Đắc"
                  className="w-full h-[500px] object-cover filter brightness-95 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>

            {/* Floating Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="absolute -bottom-8 -right-8 bg-background dark:bg-black/80 backdrop-blur-2xl border border-cyan-500/50 p-10 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.3)] z-20"
            >
              <p className="text-6xl font-black text-foreground dark:text-white leading-none mb-2">10+</p>
              <p className="text-cyan-600 dark:text-cyan-400 font-mono tracking-[0.3em] uppercase text-[10px] font-bold">Năm Kinh Nghiệm</p>
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-12 bg-cyan-500"></span>
                <span className="text-cyan-400 font-mono tracking-[0.4em] uppercase text-xs">Từ năm 2014</span>
              </div>

              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground dark:text-white mb-8 uppercase leading-[1.1] tracking-tighter">
                <span className="block whitespace-nowrap">
                  Giá Trị <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Thương Hiệu</span>
                </span>
                <span className="block whitespace-nowrap">
                  Đến Từ Tâm Huyết
                </span>
              </h3>

              <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-medium">
                Khởi đầu từ năm 2014, <strong className="text-foreground dark:text-white">Thuận Đắc</strong> đã không ngừng cải tiến công nghệ để trở thành đối tác tin cậy hàng đầu trong lĩnh vực Quảng Cáo và Nội Thất tại Cần Thơ.
              </p>

              {/* Technical Specs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="flex gap-5 p-6 rounded-2xl bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 hover:border-cyan-500/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black dark:group-hover:text-black transition-all">
                      {stat.icon}
                    </div>
                    <div>
                      <h4 className="text-foreground dark:text-white font-bold text-sm mb-1 uppercase tracking-tight">{stat.label}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{stat.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-6">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white text-black font-black rounded-full hover:bg-cyan-500 hover:scale-105 transition-all uppercase tracking-widest text-[11px]"
                >
                  Kết nối ngay
                </a>
                <div className="flex -space-x-3 items-center">
                  {[
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=100"
                  ].map((url, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden shadow-xl">
                      <img src={url} alt="Client" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <p className="ml-6 text-xs text-gray-500 font-bold uppercase tracking-widest">+500 Khách hàng</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};