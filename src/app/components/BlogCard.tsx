// components/BlogCard.tsx
import Link from "next/link";
import Image from "next/image";

type PostProps = {
  post: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    imageUrl: string;
  };
};

export default function BlogCard({ post }: PostProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white">
      <Link href={`/blog/${post.slug}`}>
        <div className="w-full h-48 relative">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      </Link>
      <div className="p-4">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p className="text-gray-500 text-sm">{post.date}</p>
        <p className="text-gray-600">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`}>
          <span className="text-pink-500 hover:underline mt-2 block">Read more →</span>
        </Link>
      </div>
    </div>
  );
}
