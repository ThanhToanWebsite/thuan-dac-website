import { motion } from "motion/react";
import { Calendar, User, ArrowRight } from "lucide-react";

const newsItems = [
  // ... news items (not changing them)
  {
    id: 1,
    title:
      "Lễ khai trương chuỗi cửa hàng Coffee House tại Cần Thơ",
    date: "15 Th02, 2026",
    author: "Admin",
    image:
      "https://images.unsplash.com/photo-1747625119757-1b5c92aec5e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMG9wZW5pbmclMjBjZXJlbW9ueSUyMGV2ZW50JTIwdmlldG5hbXxlbnwxfHx8fDE3NzAxMjU5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt:
      "Thuận Đắc hân hạnh là đơn vị tổ chức sự kiện và thi công toàn bộ hệ thống biển hiệu cho chuỗi cửa hàng mới.",
    category: "Sự Kiện",
  },
  {
    id: 2,
    title: "Xu hướng thiết kế bảng hiệu quảng cáo năm 2026",
    date: "10 Th02, 2026",
    author: "Designer Team",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ld3MlMjBjb3Jwb3JhdGUlMjBtZWV0aW5nfGVufDF8fHx8MTc3MDEyNTk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt:
      "Cập nhật những phong cách thiết kế mới nhất, kết hợp công nghệ LED ma trận và vật liệu thân thiện môi trường.",
    category: "Kiến Thức",
  },
  {
    id: 3,
    title:
      "Dự án thi công bảng hiệu tòa nhà TechTower hoàn thành vượt tiến độ",
    date: "05 Th02, 2026",
    author: "Kỹ Thuật",
    image:
      "https://images.unsplash.com/photo-1579612222961-8364d433164e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBpbnN0YWxsaW5nJTIwc2lnbnxlbnwxfHx8fDE3NzAxMjU5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt:
      "Đội ngũ kỹ thuật Thuận Đắc đã nỗ lực làm việc ngày đêm để hoàn thiện hệ thống biển hiệu khổng lồ trên tầng thượng.",
    category: "Dự Án",
  },
];

export const News = () => {
  return (
    <section
      id="news"
      className="py-24 bg-background border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-cyan-600 dark:text-cyan-400 font-bold tracking-[0.2em] uppercase text-sm mb-3 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
            Tin Tức & Hoạt Động
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase">
            Cập Nhật{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500">
              Mới Nhất
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:border-purple-500/50 transition-all group"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-100 dark:bg-purple-900/80 backdrop-blur text-purple-700 dark:text-purple-200 text-xs font-bold px-3 py-1 rounded-full border border-purple-500/30 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-foreground/50 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar
                      size={14}
                      className="text-cyan-600 dark:text-cyan-400"
                    />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} className="text-cyan-600 dark:text-cyan-400" />
                    {item.author}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                  <a href="#">{item.title}</a>
                </h4>
                <p className="text-foreground/60 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {item.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-cyan-600 dark:text-cyan-400 font-bold hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors uppercase text-xs tracking-wide group-hover:underline decoration-cyan-500/50 underline-offset-4"
                >
                  Đọc thêm{" "}
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};