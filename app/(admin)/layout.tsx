import Header from "@/components/Header";
import NavbarMenu from "@/components/NavbarMenu";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <div className="flex flex-col bg-gray-100 h-svh text-gray-600">
      <Header/>
      <div
        className="flex w-full h-full"
      >
        <NavbarMenu
        />
        <div className="flex p-3 w-full rounded">
          <main className="w-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
 }