import { LogIn, UserPlus } from "lucide-react"

export default function AuthBar() {
  return (
    <div className="flex gap-3">
      <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-yellow-900 font-medium border border-yellow-300 hover:bg-yellow-50 transition-all duration-200 hover:scale-105 hover:shadow-md">
        <LogIn className="w-4 h-4" />
        Đăng nhập
      </button>
      <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-yellow-700 text-white font-medium border border-yellow-700 hover:bg-yellow-800 transition-all duration-200 hover:scale-105 hover:shadow-lg">
        <UserPlus className="w-4 h-4" />
        Đăng ký
      </button>
    </div>
  )
}
