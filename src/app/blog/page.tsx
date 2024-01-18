import Link from "next/link";
import { blogs } from "@/constants/data/stub_data";
const Blog = () => {
  return (
    <div className="p-5 h-full w-full">
      <div className="flex gap-5 flex-wrap">
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.id}`} key={blog.id}>
            <div className="flex flex-col p-2 items-center gap-2 border rounded-md">
              <h1 className="font-bold">{blog.title}</h1>
              <p className="w-72 text-center text-sm text-slate-800">
                {blog.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
