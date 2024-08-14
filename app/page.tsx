"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const _signIn = () => {
    setLoading(true);
  }

  return (
    <main 
      className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-1"
    >
      <div
        className="flex flex-col sm:flex-row justify-between w-full sm:w-2/3 2xl:w-1/2 bg-white p-5 sm:py-16 sm:px-10 shadow-sm"
      >
        <div
          className="flex flex-col w-1/3"
        >
          <Image
            src={"/logo-kimenko.jpg"}
            width={130}
            height={130}
            alt="Logo Kimenko"
          />
        </div>
        <div
          className="flex flex-col w-full sm:w-1/2 sm:border-l p-3 mt-3 sm:mt-0"
        >
          <input
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            className="border h-10 p-2 focus:outline-lightBlue focus:rounded-none w-full"
            placeholder="Nombre de usuario"
          />
          <div
            className="relative w-full"
          >
            <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="border h-10 p-2 focus:outline-lightBlue focus:rounded-none mt-3 w-full"
              placeholder="Contraseña"
              type={
                hidePassword
                  ? "password"
                  : "text"
              }
            />
          </div>
          <div
            className="flex items-center justify-between mt-3 w-full"
          > 
            <Link
              href={"/"}
              className="text-xs text-gray-600 hover:text-lightBlue"
            >
              ¿Olvidaste tu contraseña?
            </Link>
            <button
              className="flex justify-center bg-lightBlue w-28 px-4 py-1 text-white place-self-end shadow hover:bg-cyan-400"
              onClick={_signIn}
            >
              {loading
                ? <CgSpinner 
                    className="text-2xl animate-spin"
                  />
                : "Ingresar"
              }
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
