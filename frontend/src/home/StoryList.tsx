import { Calendar, User, BookOpen, ArrowRight } from "lucide-react"

export default function StoryList() {
  const stories = [
    {
      id: 1,
      title: "Câu chuyện về làng cổ Đường Lâm",
      author: "Nguyễn Văn A",
      cover: "https://images.unsplash.com/photo-1465101178521-c1a6b1c0b8f0?auto=format&fit=crop&w=400&q=80",
      tag: "Làng cổ",
      date: "2025-09-18",
      excerpt: "Khám phá vẻ đẹp cổ kính của làng Đường Lâm với những ngôi nhà cổ và truyền thống văn hóa độc đáo.",
      readTime: "5 phút đọc",
    },
    {
      id: 2,
      title: "Di tích lịch sử Văn Miếu - Quốc Tử Giám",
      author: "Trần Thị B",
      cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      tag: "Di tích",
      date: "2025-09-17",
      excerpt: "Tìm hiểu về ngôi trường đại học đầu tiên của Việt Nam và những câu chuyện lịch sử thú vị.",
      readTime: "7 phút đọc",
    },
    {
      id: 3,
      title: "Hình ảnh quê hương xưa qua ký ức",
      author: "Lê Văn C",
      cover: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      tag: "Tư liệu",
      date: "2025-09-15",
      excerpt: "Những hình ảnh quý giá về cuộc sống người Việt xưa qua lăng kính của thời gian.",
      readTime: "4 phút đọc",
    },
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-yellow-900 font-serif">
            Câu chuyện mới nhất
          </h2>
          <p className="text-amber-700 text-lg max-w-2xl mx-auto">
            Khám phá những câu chuyện lịch sử hấp dẫn và di sản văn hóa phong phú của dân tộc Việt Nam
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.id}
              className="group bg-white border border-yellow-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={story.cover || "/placeholder.svg"}
                  alt={story.title}
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellow-700 text-white text-sm rounded-full font-semibold shadow-lg">
                    {story.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-amber-700">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(story.date).toLocaleDateString("vi-VN")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{story.readTime}</span>
                  </div>
                </div>

                <h3 className="font-bold text-xl text-yellow-900 group-hover:text-yellow-700 transition-colors duration-200 line-clamp-2">
                  {story.title}
                </h3>

                <p className="text-amber-900 text-sm leading-relaxed line-clamp-3">{story.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-yellow-200">
                  <div className="flex items-center gap-2 text-sm text-amber-700">
                    <User className="w-4 h-4" />
                    <span>{story.author}</span>
                  </div>

                  <button className="flex items-center gap-2 text-yellow-700 hover:text-yellow-900 font-semibold text-sm group-hover:translate-x-1 transition-all duration-200">
                    Đọc thêm
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-yellow-700 text-white rounded-full font-semibold hover:bg-yellow-800 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Xem tất cả câu chuyện
          </button>
        </div>
      </div>
    </section>
  )
}
