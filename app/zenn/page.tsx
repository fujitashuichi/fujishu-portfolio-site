import { Section_zenn } from "@/components/sections/articles/Section_zenn";

const zennArticles = [
  "https://zenn.dev/fujishu/articles/5e5fca686f79b1/",
  "https://zenn.dev/fujishu/articles/4c1afc57df0f2a",
  "https://zenn.dev/fujishu/articles/e3ab97ef66624d",
  "https://zenn.dev/fujishu/articles/dad6e6130d8952",
  "https://zenn.dev/fujishu/articles/da83a8f3bca4b3",
  "https://zenn.dev/fujishu/articles/90c3c9425b5017",
  "https://zenn.dev/fujishu/articles/c7c7799140b488"
]


export default function Page() {

  return (<>
    <div className="text-center">
      <h1 className="font-bold text-blue-400 text-3xl py-8">Zenn記事</h1>
      <p className="text-[20px] text-gray-600">私自身が選んだZenn記事をまとめています</p>
    </div>
    <Section_zenn urls={zennArticles} />
  </>)
}
