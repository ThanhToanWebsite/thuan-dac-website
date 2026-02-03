import { motion } from "motion/react";
import officeImg from "@/assets/office.png";
import logoImg from "@/assets/logo.png";
import imgKimYFacade from "@/assets/projects/project-kim-y-facade.png";
import imgGoldFood from "@/assets/projects/project-gold-food.jpg";

export const Hero = () => {
  return (
    <div className="relative h-screen min-h-[850px] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src={officeImg}
          alt="Creative Workspace"
          className="w-full h-full object-contain filter brightness-50 dark:brightness-40 opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-black/60 to-black" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 lg:px-20 mt-12">

        {/* Left: Typography & Action */}
        <div className="lg:col-span-7 flex flex-col justify-center pt-20 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Industrial Badge */}
            <div className="inline-flex items-center gap-3 py-2 px-6 rounded-none border-l-4 border-cyan-500 bg-black/40 backdrop-blur-md mb-12">
              <span className="text-cyan-400 text-sm font-mono tracking-[0.3em] uppercase">Est. 2014 Cần Thơ</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black text-white leading-[0.85] tracking-tighter mb-10">
              <span className="block drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">THUẬN ĐẮC</span>
              <span className="block text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">QUẢNG CÁO</span>
            </h1>

            <p className="text-xl text-gray-200 mb-12 max-w-2xl leading-relaxed font-normal border-l-2 border-cyan-500/50 pl-6 ml-2 drop-shadow-[0_2px_5px_rgba(0,0,0,1)]">
              Chuyên gia <span className="text-cyan-400 font-bold">Quảng Cáo LED</span> & <span className="text-purple-400 font-bold">Nội Thất</span>.
              Công nghệ hiện đại cho những ý tưởng không giới hạn.
            </p>

            <div className="flex flex-wrap gap-6">
              <a
                href="#contact"
                className="px-10 py-5 bg-cyan-600 text-white font-black rounded-sm hover:bg-cyan-500 transition-all shadow-[8px_8px_0_rgba(255,255,255,0.1)] hover:shadow-cyan-400/50 hover:translate-x-1 hover:-translate-y-1 uppercase tracking-widest text-sm"
              >
                Liên Hệ Ngay
              </a>
              <a
                href="#portfolio"
                className="px-10 py-5 bg-transparent border border-white/30 text-white font-bold rounded-sm hover:bg-white hover:text-black transition-all uppercase tracking-widest text-sm"
              >
                Xem Dự Án
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Rich Project Collage */}
        <div className="lg:col-span-5 h-full relative hidden lg:flex items-center justify-center pt-20 lg:pt-0">
          <div className="relative w-full max-w-[500px] h-[500px]">

            {/* Main Featured Project Card (Gold Food) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute top-0 left-0 w-[260px] h-[340px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-20 group"
            >
              <img src={imgGoldFood} alt="Gold Food Project" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-1">Bảng hiệu</p>
                <p className="font-bold text-sm">Gold Food</p>
              </div>
            </motion.div>

            {/* Secondary Project Card (Kim Y) */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 10 }}
              animate={{ opacity: 1, x: 0, rotate: 8 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute top-10 right-0 w-[240px] h-[300px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10"
            >
              <img src={imgKimYFacade} alt="Kim Y project" className="w-full h-full object-cover brightness-95 hover:brightness-100 transition-all duration-500" />
            </motion.div>

            {/* Stats & Logo Badge */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-0 right-10 w-[200px] bg-black/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-5 shadow-[0_0_50px_rgba(6,182,212,0.3)] z-40"
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={logoImg} alt="Logo" className="w-8 h-8 object-contain" />
                <div className="h-4 w-[1px] bg-white/20"></div>
                <span className="text-white font-black text-lg tracking-tighter">Thuận Đắc</span>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-cyan-400 font-black text-xl leading-none">100+</p>
                  <p className="text-gray-400 text-[8px] uppercase font-bold tracking-widest">Dự án hoàn thành</p>
                </div>
                <div>
                  <p className="text-purple-400 font-black text-xl leading-none">10+</p>
                  <p className="text-gray-400 text-[8px] uppercase font-bold tracking-widest">Năm kinh nghiệm</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};