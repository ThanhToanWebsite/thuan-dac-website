import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

import imgGoldFood from "@/assets/projects/project-gold-food.jpg";
import imgKimYFacade from "@/assets/projects/project-kim-y-facade.png";
import imgKimYInterior from "@/assets/projects/project-kim-y-interior.png";
import imgTrangDai from "@/assets/projects/project-trang-dai.jpg";
import imgKaraoke from "@/assets/projects/project-karaoke.jpg";

const projects = [
  {
    id: 1,
    title: "Bảng hiệu Gold Food",
    category: "Bảng Hiệu",
    image: imgGoldFood,
    description:
      "Thiết kế và thi công bảng hiệu chữ nổi Mica đèn LED nổi bật, mặt dựng Alu vàng sang trọng cho cửa hàng thực phẩm.",
  },
  {
    id: 2,
    title: "Trung Tâm Kim Y",
    category: "Mặt Dựng Alu",
    image: imgKimYFacade,
    description:
      "Thi công mặt dựng Alu kết hợp lam sóng trang trí, chữ nổi khổ lớn tạo diện mạo hoành tráng cho trung tâm điện máy.",
  },
  {
    id: 3,
    title: "Phòng Karaoke",
    category: "Nội Thất",
    image: imgTrangDai,
    description:
      "Hệ thống bảng hiệu cao cấp, kết hợp đèn LED và vật liệu bóng gương, thể hiện đẳng cấp thẩm mỹ viện.",
  },
  {
    id: 4,
    title: "Trang Đài Beauty & Spa",
    category: "Quảng Cáo",
    image: imgKimYInterior,
    description:
      "Thiết kế và thi công nội thất showroom hiện đại, tủ kệ trưng bày sang trọng kết hợp hệ thống chiếu sáng thông minh.",
  },
  {
    id: 5,
    title: "Karaoke VIP Phong",
    category: "LED & Sự Kiện",
    image: imgKaraoke,
    description:
      "Thi công hệ thống LED ma trận, trần xuyên sáng và nội thất cách âm chuyên nghiệp cho phòng hát giải trí cao cấp.",
  },
];

export const Portfolio = () => {
  const [selectedId, setSelectedId] = useState<number | null>(
    null,
  );

  return (
    <section id="portfolio" className="py-32 bg-background relative border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-purple-500"></span>
              <span className="text-purple-400 font-mono tracking-[0.5em] uppercase text-xs">DI SẢN DỰ ÁN</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-foreground dark:text-white uppercase leading-tight tracking-tighter">
              Công Trình <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.2)] dark:drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                Tiêu Biểu
              </span>
            </h3>
          </div>
          <p className="max-w-xs text-right text-muted-foreground font-mono text-[10px] uppercase tracking-[0.2em] leading-loose">
            * Các dự án chọn lọc từ 2014 - {new Date().getFullYear()}. Tất cả công trình được thực hiện với độ chính xác cơ khí và tác động thị giác tối ưu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`cursor-pointer group relative rounded-[2rem] overflow-hidden border border-foreground/10 dark:border-white/10 bg-background dark:bg-black/40 backdrop-blur-md hover:border-purple-500/50 transition-all duration-500 
                ${index === 0 ? "md:row-span-2 md:col-span-1" : ""}
                ${index === 3 ? "md:col-span-2" : ""}
              `}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="h-[1px] w-6 bg-purple-600 dark:bg-purple-500" />
                    <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-white text-2xl font-black group-hover:text-purple-300 transition-colors uppercase tracking-tight">
                    {project.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 dark:bg-black/90 backdrop-blur-md">
              {projects.map(
                (project) =>
                  project.id === selectedId && (
                    <motion.div
                      layoutId={`card-container-${project.id}`}
                      key={project.id}
                      className="bg-card rounded-2xl overflow-hidden w-full max-w-2xl shadow-[0_0_50px_rgba(6,182,212,0.2)] relative border border-border"
                    >
                      <button
                        onClick={() => setSelectedId(null)}
                        className="absolute top-4 right-4 bg-black/50 hover:bg-cyan-500 p-2 rounded-full z-10 transition-colors border border-white/20 hover:border-transparent text-white"
                      >
                        <X size={24} />
                      </button>

                      <div className="aspect-video w-full relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50"></div>
                      </div>

                      <div className="p-8">
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                          {project.category}
                        </span>
                        <h3 className="text-3xl font-bold text-foreground mb-4">
                          {project.title}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed text-lg font-light border-l-2 border-cyan-500 pl-4">
                          {project.description}
                        </p>
                      </div>
                    </motion.div>
                  ),
              )}
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};