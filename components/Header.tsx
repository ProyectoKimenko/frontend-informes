import Image from "next/image";
import Link from "next/link";

export default function Header(){
  return (
    <div className="flex items-center justify-around h-14 w-full bg-gray-100">
      <Image
        src={"/logo-kimenko.jpg"}
        width={90}
        height={90}
        alt="Logo Kimenko"
      />
    </div>
  )
}