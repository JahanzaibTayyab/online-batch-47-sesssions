import { blogs } from "@/constants/data/stub_data";

export async function generateStaticParams() {
  return blogs.map((blog) => ({ id: `${blog.id}` }));
}

const getBlogById = (id: number) => {
  return blogs.find((blog) => blog.id == id);
};

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const data = getBlogById(Number(params.id));

  if (!data) {
    return <div>Invalid Id</div>;
  }
  return (
    <div className="flex flex-col gap-2 p-16">
      <h1 className="font-bold">{data.title}</h1>
      <p className="w-72 text-sm text-slate-800">{data.description}</p>
      <div
        dangerouslySetInnerHTML={{ __html: data.content_html }}
        className="text-sm"
      />
    </div>
  );
}
