export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img src="/trong-dong-viet-nam.jpg" alt="Logo Trống đồng" className="w-12 h-12 rounded-xl object-cover shadow-lg border border-yellow-400" />
      <div className="flex flex-col">
        <span className="font-bold text-2xl text-yellow-900 leading-none">Lịch sử Quốc gia</span>
        <span className="text-xs text-amber-700 font-medium tracking-wide">Di sản văn hóa Việt Nam</span>
      </div>
    </div>
  )
}
