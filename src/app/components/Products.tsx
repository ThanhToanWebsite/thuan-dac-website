import { motion } from "motion/react";
import { ArrowUpRight, Cpu, Box, PenTool, Layers } from "lucide-react";
import imgGoldFood from "@/assets/projects/project-gold-food.jpg";
import imgKimYFacade from "@/assets/projects/project-kim-y-facade.png";
import imgKaraoke from "@/assets/projects/project-karaoke.jpg";

const products = [
  {
    id: 1,
    title: "Bảng Hiệu & Hộp Đèn",
    code: "TDP-001",
    category: "QUẢNG CÁO",
    image: imgGoldFood,
    description: "Giải pháp quảng cáo LED, chữ nổi Mica/Inox cao cấp, hộp đèn hút nổi sáng tạo.",
    icon: <Cpu className="w-5 h-5" />,
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 2,
    title: "Mặt Dựng Alu - Kim Loại",
    code: "TDP-002",
    category: "XÂY DỰNG",
    image: imgKimYFacade,
    description: "Thi công ốp Alu, mặt dựng cấu kiện kim loại, mái hiên và nhà tiền chế bền bỉ.",
    icon: <Box className="w-5 h-5" />,
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 3,
    title: "Ấn Phẩm & In Ấn",
    code: "TDP-003",
    category: "IN ẤN",
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=1000",
    description: "Catalogue, Brochure, sách báo, tạp chí chất lượng in offset và in nhanh chuyên nghiệp.",
    icon: <PenTool className="w-5 h-5" />,
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    title: "Nội Thất & Thiết Bị",
    code: "TDP-004",
    category: "NỘI THẤT",
    image: imgKaraoke,
    description: "Thiết kế không gian văn phòng, showroom và cung cấp hệ thống chiếu sáng hiện đại.",
    icon: <Layers className="w-5 h-5" />,
    color: "from-green-500 to-emerald-600"
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-0 right-0 text-[10rem] md:text-[15rem] font-black text-white/[0.02] select-none pointer-events-none leading-none -translate-y-1/4 uppercase">
        SẢN PHẨM
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-cyan-500"></div>
            <span className="text-cyan-400 font-mono tracking-[0.5em] uppercase text-xs">Danh Mục 2024</span>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h3 className="text-5xl md:text-7xl font-black text-white uppercase leading-tight tracking-tighter">
              Giải Pháp <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                Đột Phá
              </span>
            </h3>
            <p className="max-w-md text-gray-400 font-medium leading-relaxed border-l-2 border-white/10 pl-8">
              Chúng tôi cung cấp hệ sinh thái sản phẩm quảng cáo và thi công toàn diện, kết hợp giữa kỹ thuật gia công chính xác và tư duy sáng tạo nghệ thuật.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden bg-black border border-white/10"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Product Code Label */}
              <div className="absolute top-8 left-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase">{item.code}</span>
                  <span className="text-xs text-white font-bold tracking-widest uppercase">{item.category}</span>
                </div>
              </div>

              {/* Arrow Badge */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500">
                <ArrowUpRight size={24} />
              </div>

              {/* Content Box */}
              <div className="absolute bottom-10 left-10 right-10">
                <h4 className="text-3xl md:text-3xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm max-w-sm mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.description}
                </p>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full bg-gradient-to-r ${item.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="#contact"
            className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 px-10 py-5 rounded-full text-white font-black transition-all hover:scale-105"
          >
            <span className="uppercase tracking-[0.2em] text-xs">Xem chi tiết danh mục</span>
            <div className="p-2 bg-cyan-500 rounded-full text-black group-hover:rotate-45 transition-transform">
              <ArrowUpRight size={18} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};