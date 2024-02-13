import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FightPosts from "./components/FightPosts";

export const revalidate = 30; // revalidate at most every 30 seconds

async function getData() {
  const query = `
*[_type == "blog"] | order(_createdAt desc) {
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  return (
    <Carousel
    opts={{
      align: "start",
    }}
    className="w-full max-w-3xl">
    <FightPosts />
      <CarouselContent>
        {data.map((post, index) => (
          <CarouselItem key={index} className="md:basis-auto ">
            <div className="p-1">
              
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                  <Card key={index}>
                    <Image
                      src={urlFor(post.titleImage).url()}
                      alt="image"
                      width={500}
                      height={300}
                      className="rounded-t-lg h-[300px] object-cover"
                    />

                    <CardContent className="pt-5">
                      <h3 className="text-lg line-clamp-2 font-bold">
                        {post.title}
                      </h3>
                      <p className="line-clamp-3 text-sm pt-2 text-gray-600 dark:text-gray-300">
                        {post.smallDescription}
                      </p>
                      <Button asChild className="w-full mt-5">
                        <Link href={`/blog/${post.currentSlug}`}>
                          Read More
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

{
  /* <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">

</div> */
}
