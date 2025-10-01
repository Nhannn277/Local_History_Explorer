import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <form className="flex items-center bg-white/80 backdrop-blur-sm border border-yellow-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-center px-4 py-3 flex-1">
        <Search className="h-5 w-5 text-amber-700 mr-3 group-focus-within:text-yellow-700 transition-colors" />
        <input
          type="text"
          placeholder="Tìm kiếm địa điểm, câu chuyện..."
          className="bg-transparent focus:outline-none text-yellow-900 placeholder:text-amber-700 flex-1 font-serif text-base"
          style={{ fontFamily: 'Noto Serif, serif' }}
        />
      </div>
      <button
        type="submit"
        className="bg-yellow-700 text-white px-6 py-3 font-semibold font-serif hover:bg-yellow-800 transition-all duration-200 hover:shadow-md active:scale-95 flex items-center gap-2"
      >
        <span>Search</span>
        <Search className="h-4 w-4" />
      </button>
    </form>
  )
}
