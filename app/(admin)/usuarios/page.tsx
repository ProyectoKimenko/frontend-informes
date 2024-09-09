import SearchBar from "@/components/SearchBar";
import UsersTable from "@/components/UsersTable";
export default function Users(){
  return (
    <div
      className="flex flex-col  gap-2 w-full"
    >
      <div
        className="w-1/4"
      >
        <SearchBar/>
      </div>
      <UsersTable
      />
    </div>
  )
}