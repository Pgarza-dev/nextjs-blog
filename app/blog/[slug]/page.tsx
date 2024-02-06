import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == "${slug}"] {
        "currentSlug": slug.current,
        title,
          content,
          titleImage
      } [0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);
  return (
    <div className="p-8">
      <h1>
        <span className="text-base block text-primary text-center font-semibold tracking-wide uppercase">
          Pablo Garza - Blog
        </span>
        <span className="pt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        alt="Title image"
        width={800}
        height={800}
        priority
        className="rounded-lg mt-8 border w-full h-96"
      />

      <div className="mt-16 prose prose-blue prose-xl dark:prose-invert">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
