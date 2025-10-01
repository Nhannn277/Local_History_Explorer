import { Home, Compass, Heart, Mail, Globe, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 bg-gradient-to-br from-red-900 via-red-800 to-amber-900 border-t border-amber-700/50 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(245,158,11,0.05)_50%,transparent_75%)]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Navigation Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center overflow-hidden">
                <img src="/trong-dong-viet-nam.jpg" alt="Logo Trống đồng" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-white">Lịch sử Quốc gia</h3>
            </div>

            <nav className="space-y-3">
              {[
                { icon: Home, label: "Trang chủ", href: "#" },
                { icon: Compass, label: "Khám phá", href: "#" },
                { icon: Heart, label: "Đóng góp", href: "#" },
                { icon: Mail, label: "Liên hệ", href: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-3 text-amber-100 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <div className="w-8 h-8 bg-red-800/50 group-hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-lg font-semibold text-white">Kết nối với chúng tôi</h3>

            <div className="flex gap-4">
              {[
                { icon: Globe, label: "Website", href: "#", color: "from-amber-500 to-amber-600" },
                { icon: Facebook, label: "Facebook", href: "#", color: "from-red-500 to-red-600" },
                { icon: Youtube, label: "YouTube", href: "#", color: "from-amber-600 to-red-600" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`group w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-amber-200">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Giới thiệu
              </a>
              <div className="w-1 h-1 bg-amber-400 rounded-full" />
              <a href="#" className="hover:text-white transition-colors duration-300">
                Donate
              </a>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="text-center md:text-right">
              <div className="text-sm font-semibold text-white mb-2">© 2025 Lịch sử Quốc gia Việt Nam</div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-800/50 to-amber-800/50 rounded-full border border-amber-600/50">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                <span className="text-xs text-amber-100">Xây dựng bởi nhóm Local History Explorer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
