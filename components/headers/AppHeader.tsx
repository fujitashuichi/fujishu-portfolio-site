"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const tabs = [
  { name: "Home", path: "/" },
  { name: "Profile", path: "/profile" },
  { name: "Zenn", path: "/zenn" }
];


export function AppHeader() {
  const pathName = usePathname();

  return (
    <header className="h-fit text-center bg-olive-100">
      <h1 className="relative overflow-hidden p-5 text-4xl text-blue-800 font-serif font-bold italic">
        {"Fujita Shuichi's Portfolios"}
      </h1>
      <ul className="flex justify-around text-center w-full h-10 border-t border-olive-300">
        {
          tabs.map(tab => {
            const isActive = pathName === tab.path;

            return (
              <li key={tab.name} className="flex-1 border-r border-olive-300">
                <Link
                  href={tab.path}
                  className={`flex w-full h-full ${isActive ? "bg-blue-200" : "bg-olive-100"}`}
                >
                  <p className="m-auto">
                    {tab.name}
                  </p>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </header>
  )
}
