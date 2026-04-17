import React from "react";
import Image from "next/image";
import BlogTypes from "@/types/blogTypes";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import { Calendar } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { SINGLE_POST_QUERY } from "@/sanity/queries/postQueries";
import { ALL_POST_SLUG } from "@/sanity/queries/postQueries";
import { PortableText } from "@portabletext/react";
import Blog from "@/Data/blog";
import { components } from "@/app/lib/component";

export async function generateStaticParams() {
  if (!client) {
    return Blog.map((item) => ({
      slug: item.slug.current,
    }));
  }

  const posts = await client.fetch(ALL_POST_SLUG);

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export default async function page({ params }: { params: { slug: string } }) {


  let singleBlog = Blog.find((item)=> item.slug.current === params.slug);

  if (client) {
    try {
      const sanitySingleBlog = await client.fetch(SINGLE_POST_QUERY, {
        slug: params.slug,
      });

      singleBlog = sanitySingleBlog;
    } catch (err) {
      console.log("error on blog page data fetching", err);
    }
  }


  if (!singleBlog) {
    return <div>No Blog Found</div>;
  }

  return (
    <SmoothScrollWrapper>
      <div className="section">
        <div className="flex justify-center overflow-hidden">
          <div className="max-w-3xl w-full flex flex-col text-left px-0 md:px-4">
            <div className="relative w-[750] h-[100] overflow-hidden">
              <Image
                src={singleBlog.featuredImage.asset.url}
                alt={singleBlog.title}
                className="object-cover py-5"
                width={1920}
                height={1080}
              />
            </div>
            <h4>{singleBlog.title}</h4>
            <div className="flex gap-2 md:gap-3 items-center pb-3">
              <div className="flex items-center justify-center gap-3">
                <div className="rounded-full w-[50] h-[50] overflow-hidden">
                  <Image
                    className="rounded-full w-12 h-12 object-cover"
                    objectFit="cover"
                    src={singleBlog.author.image.asset.url}
                    width={50}
                    height={50}
                    alt={singleBlog.author.name}
                  />
                </div>
                <h6 className="mb-0 text-sm md:text-md">
                  {singleBlog.author.name}
                </h6>
              </div>
              <div className="flex gap-1 items-center">
                <Calendar size={20} />
                <span className=" text-sm md:text-md">
                  {new Date(singleBlog.publishedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            {/* <p>{singleBlog.content}</p> */}
            <PortableText components={components} value={singleBlog.body} />
          </div>
        </div>
      </div>
    </SmoothScrollWrapper>
  );
}
