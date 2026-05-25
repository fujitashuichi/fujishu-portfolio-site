import Link from "next/link";

export function AppHeader() {
  return (
    <header className="h-fit text-center bg-olive-100">
      <h1 className="relative overflow-hidden p-5 text-4xl text-blue-800 font-serif font-bold italic">
        {"Fujita Shuichi's Portfolios"}
      </h1>
      <ul className="flex justify-around text-center w-full h-10 border-t border-olive-300">
        <li className="flex-1 border-r border-olive-300">
          <Link href={"/"} className="flex w-full h-full">
            <p className="m-auto">
              Home
            </p>
          </Link>
        </li>
        <li className="flex-1 border-r border-olive-300">
          <Link href={"/profile"} className="flex w-full h-full">
            <p className="m-auto">
              Profile
            </p>
          </Link>
        </li>
        <li className="flex-1">
          <Link href={"/zenn"} className="flex w-full h-full">
            <p className="m-auto">
              Zenn
            </p>
          </Link>
        </li>
      </ul>
    </header>
  )
}
