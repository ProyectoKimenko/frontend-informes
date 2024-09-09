import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Header(){
  return (
    <div className="flex items-center justify-between py-1 px-3 w-full bg-white shadow z-20">
      <Image 
        src={"/logo-kimenko.jpg"}
        height={10}
        width={70}
        alt="Logo Kimenko"
      />
      <div
        className="flex items-center gap-1 text-xs"
      >
        <FaRegCircleUser 
          className="text-lg"
        />
        <p>
          Miguel Salazar
        </p>
      </div>
    </div>
  )
}