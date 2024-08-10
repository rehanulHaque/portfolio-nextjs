import React from "react";
import Link from 'next/link'

const BlogCard = ({ blog }) => {
  return (
    <div className="lg:flex md:flex shadow-lg mb-8 mt-8 rounded-md items-center ">
      <div className="lg:mr-4 lg:w-[300px] md:w-[300px] sm:w-[300px]">
        <img src={blog.image.url} alt="" className="object-contain w-full"/>
      </div>
      <div className="p-3">
        <Link className="font-semibold text-2xl" href={`/blogs/${blog.blogUrl}`}>{blog.title}</Link>
        <p>{blog.miniDescription}</p>
      </div>
    </div>
  );
};

export default BlogCard;
