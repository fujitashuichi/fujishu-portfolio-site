import { AppHeader } from "@/components/AppHeader";
import { Section_zenn } from "./sections/articles/Section_zenn";

export default function Home() {
  const zennArticles = [
    "https://zenn.dev/fujishu/articles/5e5fca686f79b1/"
  ]

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <AppHeader />
      <main className="flex flex-1 w-full max-w-300 flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Section_zenn urls={zennArticles} />
      </main>
    </div>
  );
}
