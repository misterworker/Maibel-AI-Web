import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
};

const posts: Post[] = [
  {
    slug: "focus-group-discussion",
    title: "Focus Group Discussion",
    date: "26th Jan 2025",
    excerpt: "A deeper dive into AI-powered wellness...",
    imageUrl: "/blog/roadshow_banner.jpg",
  },
  {
    slug: "roadshow-testing",
    title: "Roadshow Testing",
    date: "20th Jan 2025",
    excerpt: "This is the first post, introducing our journey...",
    imageUrl: "/blog/roadshow_banner.jpg",
  },

];

export default function BlogPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-white min-h-screen text-gray-800">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
