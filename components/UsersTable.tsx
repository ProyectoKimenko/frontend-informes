export default function UsersTable(){
  return (
    <div
      className="flex flex-col w-full p-2 bg-white h-full border border-gray-200"
    >
      <table className="w-full text-sm text-left rounded-lg ">
        <thead className="text-xs font-main border-b border-gray-300">
          <tr className="text-left text-sm font-normal">
            <th className="pl-2 font-semibold">Usuario</th>
            <th className="font-semibold">Email</th>
            <th className="font-semibold">Telefono</th>
          </tr>
        </thead>
        <tbody >
          <tr className="text-left text-sm border-b border-gray-300 hover:bg-gray-100 font-main">
            <td className="font-normal pl-2 py-2">Jhon Doe</td>
            <td className="font-normal py-1">jhon@doe.com</td>
            <td className="font-normal py-1">967279358</td>
          </tr>
          <tr className="text-left text-sm border-b border-gray-300 hover:bg-gray-100 font-main">
            <td className="font-normal pl-2 py-2">Jhon Doe</td>
            <td className="font-normal py-1">jhon@doe.com</td>
            <td className="font-normal py-1">967279358</td>
          </tr>
          <tr className="text-left text-sm border-b border-gray-300 hover:bg-gray-100 font-main">
            <td className="font-normal pl-2 py-2">Jhon Doe</td>
            <td className="font-normal py-1">jhon@doe.com</td>
            <td className="font-normal py-1">967279358</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}