import React from "react";
import Blog from "@/Data/blog";
import BlogCard from "@/components/cards/Blog/BlogCard";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import { POST_QUERIES } from "@/sanity/queries/postQueries";
import { client } from "@/sanity/lib/client";
import BlogTypes from "@/types/blogTypes";

const OPTIONS = { next: { revalidate: 30 } };

export default async function page() {
  let posts: BlogTypes[] = Blog;

  if (client) {
    try {
      const sanityPosts = await client.fetch<BlogTypes[]>(
        POST_QUERIES,
        {},
        OPTIONS,
      );
      posts = sanityPosts;
    } catch (err) {
      console.log("error on blog page data fetching", err);
    }
  }

  return (
    <SmoothScrollWrapper>
      <div className="section">
        <div className="heading pt-15 sm:py-10">
          <h4 className="text-center">Luxury Property News</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((blog, idx) => {
            return (
              <div key={idx}>
                <BlogCard blog={blog} />
              </div>
            );
          })}
        </div>
      </div>
    </SmoothScrollWrapper>
  );
}
