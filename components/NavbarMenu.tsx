import Link from "next/link";
import { HiOutlineUsers } from "react-icons/hi2";
import { TfiDashboard } from "react-icons/tfi";

export default function NavbarMenu(){
  return (
    <div 
      className="flex flex-col w-1/6"
    >
      <nav className="flex flex-col h-full pr-3">
        <Link
          href={"/dashboard"}  
          className="flex items-center gap-2 rounded py-0.5 px-3 hover:bg-lightBlue"
        >
          <TfiDashboard />
          Tablero
        </Link>
        <Link
          href={"/usuarios"}  
          className="flex items-center gap-2  py-0.5 px-3 hover:bg-lightBlue rounded"
        >
          <HiOutlineUsers />
          Usuarios
        </Link>
      </nav>
    </div>
  )
}