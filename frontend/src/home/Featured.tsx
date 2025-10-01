"use client"
import { useState } from "react"
import { MapPin, Clock, Star } from "lucide-react"

const featuredSites = [
  {
    id: 1,
    title: "Văn Miếu Quốc Tử Giám",
    desc: "Di tích lịch sử nổi tiếng tại Hà Nội, nơi tôn vinh truyền thống hiếu học của dân tộc.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    location: "Hà Nội",
    year: "1070",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Cột cờ Hà Nội",
    desc: "Biểu tượng lịch sử, chứng kiến nhiều sự kiện quan trọng của thủ đô.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    location: "Hà Nội",
    year: "1812",
    rating: 4.6,
  },
  {
    id: 3,
    title: "Hoàng thành Thăng Long",
    desc: "Di sản thế giới UNESCO, trung tâm quyền lực suốt nhiều triều đại Việt Nam.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    location: "Hà Nội",
    year: "1010",
    rating: 4.9,
  },
]

export default function Featured() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  return (
  <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-4 text-balance">Di tích nổi bật</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto text-pretty">
            Khám phá những di sản văn hóa quý báu của Việt Nam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSites.map((site) => (
            <div
              key={site.id}
              className={`group relative bg-white border border-yellow-300 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer ${
                hoveredCard === site.id ? "shadow-2xl scale-105 border-yellow-500" : "hover:shadow-xl hover:scale-102"
              }`}
              onMouseEnter={() => setHoveredCard(site.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedCard(selectedCard === site.id ? null : site.id)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={site.img || "/placeholder.svg"}
                  alt={site.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 right-4 bg-yellow-100/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-semibold text-yellow-900">{site.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-yellow-900 group-hover:text-yellow-700 transition-colors duration-200 text-balance">
                    {site.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-amber-700">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{site.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{site.year}</span>
                  </div>
                </div>

                <p className="text-amber-900 text-sm leading-relaxed text-pretty">
                  {selectedCard === site.id ? site.desc : `${site.desc.slice(0, 80)}...`}
                </p>

                <button className="mt-4 w-full bg-yellow-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 hover:bg-yellow-800 hover:shadow-md">
                  {selectedCard === site.id ? "Thu gọn" : "Xem chi tiết"}
                </button>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
