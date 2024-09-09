import { IoIosSearch } from "react-icons/io";

export default function SearchBar(){
  return (
    <div
      className="relative flex items-center w-full"
    >
      <div
        className="absolute left-1"
      >
        <IoIosSearch />
      </div>
      <input
        className="h-8 w-full pl-6 text-sm focus:outline-none  border border-gray-200"
        placeholder="Buscar..."
      />
    </div>
  );
}