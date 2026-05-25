import { z } from "zod";

const SucceedApiSchema = z.object({
  status: z.string("success"),
  data: z.object({
    title:       z.string().or(z.null()),
    description: z.string().or(z.null()),
    author:      z.string().or(z.null()),
    publisher:   z.string().or(z.null()),
    date:        z.string().or(z.null()),
    image: z.object({
      url:       z.string().or(z.null())
    }),
    logo: z.object({
      url:       z.string().or(z.null())
    })
  })
})

type Data = {
  title: string | null,
  og_imageUrl: string | null,
  logoUrl: string | null,
  description: string | null,
  author: string | null,
  publisher: string | null,
  date: string | null
}

type Result =
  | { success: false }
  | { success: true, data: Data }


export const fetchZennArticle = async (articleUrl: string): Promise<Result> => {
  const apiUrl = new URL("https://api.microlink.io");
  apiUrl.searchParams.append("url", articleUrl);

  try {
    const response = await fetch(apiUrl);

    if (response.status !== 200) {
      return {
        success: false
      }
    }

    const parsed = SucceedApiSchema.safeParse(
      await response.json()
    );

    if (!parsed.success) {
      console.warn("記事情報の取得に失敗しました");
      return {
        success: false
      };
    }

    const result = parsed.data;

    return {
      success: true,
      data: {
        title: result.data.title,
        og_imageUrl: result.data.image.url,
        logoUrl: result.data.logo.url,
        description: result.data.description,
        author: result.data.author,
        publisher: result.data.publisher,
        date: result.data.date
      }
    }
  } catch (err) {
    console.warn("記事の取得に失敗しました。");
    console.log(err);
    return {
      success: false
    }
  }
};
