import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  return (
  <section className="relative text-center py-20 bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-200 rounded-2xl shadow-xl mb-8 border border-yellow-300 overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(200,160,46,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.08),transparent_50%)]"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
          <span className="text-sm font-medium text-yellow-900 bg-white px-3 py-1 rounded-full border border-yellow-300">
            Khám phá di sản văn hóa
          </span>
          <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
        </div>

        <h1 className="text-5xl font-bold mb-6 text-yellow-900 leading-tight text-balance">
          Khám phá lịch sử
          <span className="text-yellow-700"> Việt Nam</span>
        </h1>

        <p className="mb-8 text-xl text-amber-700 max-w-2xl mx-auto leading-relaxed text-pretty">
          Nơi lưu giữ và chia sẻ những câu chuyện, hình ảnh về đất nước, con người Việt Nam qua các thời kỳ lịch sử.
        </p>

        <button className="group inline-flex items-center gap-2 px-8 py-4 bg-yellow-700 text-white rounded-full font-semibold shadow-lg hover:bg-yellow-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Khám phá ngay
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </section>
  )
}
