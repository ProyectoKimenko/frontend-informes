import SearchBar from "@/components/SearchBar";
import UsersTable from "@/components/UsersTable";

export default function Dashboard(){
  return (
    <div
      className="flex flex-col w-full gap-2"
    >
      <UsersTable
      />
    </div>
  )
}