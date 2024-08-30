import Header from "@/components/Header";
import NavbarMenu from "@/components/NavbarMenu";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <div className="flex bg-gray-100 h-svh p-5">
      <NavbarMenu
      />
      <div className="flex bg-white p-2 w-full rounded">
        <main>
          {children}
        </main>
      </div>
    </div>
  )
 }