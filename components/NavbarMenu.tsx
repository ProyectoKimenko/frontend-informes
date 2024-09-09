'use client'
import Link from "next/link";
import { HiOutlineUsers } from "react-icons/hi2";
import { TfiDashboard } from "react-icons/tfi";
import { usePathname } from "next/navigation";

export default function NavbarMenu(){
  const pathname = usePathname();

  return (
    <div 
      className="flex flex-col w-1/6 bg-white shadow-lg pt-2"
    >
      <nav className="flex flex-col gap-1 h-full text-gray-600 text-sm">
        <Link
          href={"/dashboard"}  
          className={`flex items-center border-r-4 border-transparent gap-2 py-2 px-3 hover:bg-cyan-100 hover:border-cyan-500 hover:text-cyan-800 ${
            pathname.includes("/dashboard") && "bg-cyan-100 border-cyan-500 text-cyan-800"
          }`}
        >
          <TfiDashboard />
          Tablero
        </Link>
        <Link
          href={"/usuarios"}  
          className={`flex items-center border-r-4 border-transparent gap-2 py-2 px-3 hover:bg-cyan-100 hover:border-cyan-500 hover:text-cyan-800 ${
            pathname.includes("/usuarios") && "bg-cyan-100 border-cyan-500 text-cyan-800"
          }`}
        >
          <HiOutlineUsers />
          Usuarios
        </Link>
      </nav>
    </div>
  )
}