import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Zap,
  PenTool,
  Printer,
  Truck,
  Layout,
  Layers,
  Newspaper,
  Hammer,
  Moon,
  Sun,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Trang chủ", href: "#" },
    { name: "Giới thiệu", href: "#about" },
    {
      name: "Sản Phẩm",
      href: "#products",
      hasSubmenu: true,
      submenu: [
        {
          name: "Bảng hiệu - Hộp đèn",
          icon: <Zap size={16} />,
          href: "#products-signage",
        },
        {
          name: "Mặt dựng Alu & Kim loại",
          icon: <Hammer size={16} />,
          href: "#products-construction",
        },
        {
          name: "Ấn phẩm quảng cáo",
          icon: <Printer size={16} />,
          href: "#products-print",
        },
        {
          name: "Nội thất & Thiết bị",
          icon: <Layers size={16} />,
          href: "#products-interior",
        },
      ],
    },
    {
      name: "Dịch Vụ",
      href: "#services",
      hasSubmenu: true,
      submenu: [
        {
          name: "Thiết kế & Thi công",
          icon: <PenTool size={16} />,
          href: "#service-design",
        },
        {
          name: "In ấn & Sản xuất",
          icon: <Printer size={16} />,
          href: "#service-printing",
        },
        {
          name: "Tổ chức sự kiện",
          icon: <Layout size={16} />,
          href: "#service-events",
        },
        {
          name: "Gia công cơ khí",
          icon: <Truck size={16} />,
          href: "#service-mechanical",
        },
      ],
    },
    {
      name: "Tin Tức",
      href: "#news",
      icon: <Newspaper size={16} />,
    },
    { name: "Liên hệ", href: "#contact" },
  ];

  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(name);
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <nav className="bg-background/80 dark:bg-background/40 backdrop-blur-xl border border-foreground/10 dark:border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] px-8 py-3 transition-all duration-500 hover:border-cyan-500/30">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#"
              className="flex items-center gap-3 group"
            >
              <img
                src={logo}
                alt="Thuận Đắc Logo"
                className="h-10 w-auto drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all group-hover:scale-110"
              />
              <div className="flex flex-col border-l border-foreground/20 dark:border-white/20 pl-3">
                <span className="font-black text-xl tracking-tight text-foreground dark:text-white transition-all duration-300 relative group-hover:scale-105 active:scale-95 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)] dark:drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                  <span className="relative z-10">THUẬN ĐẮC</span>
                  {/* Subtle Neon Underglow */}
                  <span className="absolute inset-0 bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </span>
                <span className="text-[8px] tracking-[0.3em] text-cyan-600 dark:text-cyan-400 uppercase font-black">
                  QUẢNG CÁO & NỘI THẤT
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group/menu"
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-foreground/70 dark:text-white/70 hover:text-cyan-600 dark:hover:text-cyan-400 font-bold transition-all hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] uppercase tracking-widest text-[11px]"
                >
                  {link.name}
                  {link.hasSubmenu && (
                    <ChevronDown
                      size={12}
                      className="mt-0.5 group-hover/menu:rotate-180 transition-transform"
                    />
                  )}
                </a>

                {/* Dropdown Desktop */}
                {link.hasSubmenu && (
                  <div className="absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2 w-64 bg-background/95 dark:bg-black/90 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 transform translate-y-2 group-hover/menu:translate-y-0 z-50 p-2">
                    <div className="space-y-1">
                      {link.submenu?.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center gap-3 px-4 py-3 text-xs font-bold text-foreground/60 dark:text-white/60 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-foreground/5 rounded-xl transition-all group/item"
                        >
                          <span className="text-cyan-600 dark:text-cyan-500 group-hover/item:scale-110 transition-transform">
                            {subItem.icon}
                          </span>
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="h-4 w-[1px] bg-foreground/10 dark:bg-white/10 mx-2"></div>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-foreground/5 dark:hover:bg-white/10 text-foreground dark:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
            </button>

            <a
              href="tel:0945142345"
              className="bg-cyan-500 text-black px-6 py-2.5 rounded-full font-black hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2 text-[11px] uppercase tracking-tighter"
            >
              <Phone size={14} className="fill-current" />
              LIÊN HỆ NGAY
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyan-400 hover:text-cyan-300 focus:outline-none p-2"
            >
              {isOpen ? (
                <X
                  size={32}
                  className="drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]"
                />
              ) : (
                <Menu
                  size={32}
                  className="drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]"
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 bg-background/95 dark:bg-black/90 backdrop-blur-2xl border border-foreground/10 dark:border-white/10 rounded-2xl overflow-hidden max-h-[70vh] overflow-y-auto p-4 shadow-2xl"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasSubmenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(link.name)}
                        className="flex w-full justify-between items-center px-4 py-3 text-xs font-bold text-foreground/60 dark:text-white/60 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-foreground/5 rounded-xl transition-all uppercase tracking-widest"
                      >
                        {link.name}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${activeSubmenu === link.name ? "rotate-180 text-cyan-600 dark:text-cyan-400" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeSubmenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden bg-foreground/5 rounded-xl ml-4 mt-1 border-l border-cyan-500/30"
                          >
                            {link.submenu?.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-6 py-3 text-[11px] font-bold text-foreground/50 dark:text-white/50 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                              >
                                {subItem.icon}
                                {subItem.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-xs font-bold text-foreground/60 dark:text-white/60 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-foreground/5 rounded-xl transition-all uppercase tracking-widest"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <a
                href="tel:0945142345"
                className="flex w-full items-center justify-center gap-2 bg-cyan-500 text-black px-4 py-4 rounded-xl font-black hover:bg-white transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] mt-4 uppercase text-xs tracking-widest"
              >
                <Phone size={16} className="fill-current" />
                Dịch vụ: 0945 142 345
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};