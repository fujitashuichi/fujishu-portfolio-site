import Image from 'next/image';
import { fetchZennArticle } from './fetchZennArticle';


export function Section_zenn({ urls }: { urls: string[] }) {
  return (
    <section className="my-0 mx-auto px-4">
      <p className="text-[16px]">※ api.microlink.io から取得しています。これにはレート制限があり、取得に失敗することがあります</p>
      <ul className="flex flex-col py-8 gap-y-4">
        {
          urls.map(async (url, idx) => {
            setTimeout(() => {}, 200);
            const result = await fetchZennArticle(url);

            if (!result.success) {
              return (<>
                <a href={url} />
              </>)
            }

            const data = result.data;

            return (
              <li key={idx} className="mb-4 mx-auto">
                <p className="text-[16px]">{idx + 1}.</p>
                <div className="rounded-2xl border-b-2 border-r-3 border-[#cccccc55]">
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-inherit">
                    <div className="border text-gray-500 rounded-2xl p-4 max-w-150 gap-4 bg-white font-serif">

                      {/* header */}
                      <div className="flex p-2 text-center max-[560px]:flex-col">
                        <Image
                          src={data.logoUrl ?? ""}
                          alt="zenn-article"
                          width={50} height={50}
                          className="max-w-10 max-h-10 max-[560px]:m-auto"
                        />
                        <h3 className="mr-2 text-2xl text-gray-600 max-[560px]:text-xl">
                          {data.title}
                        </h3>
                      </div>

                      <p className="text-sm p-4">
                        {data.description ?? "詳細なし"}...
                      </p>

                      {/* og-image */}
                      <div className="h-fit rounded-xl overflow-hidden">
                        <Image
                          src={data.og_imageUrl ?? ""}
                          alt="記事のサムネイル"
                          width={1200} height={630}
                          className="max-h-50 object-contain"
                        />
                      </div>

                      <span className="text-[12px] color: #888;">zenn.dev</span>
                    </div>
                  </a>
                </div>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}
