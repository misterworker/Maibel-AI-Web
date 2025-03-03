// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
  imageUrl: string;
};

const posts: Post[] = [
  {
    slug: "focus-group-discussion",
    title: "Focus Group Discussion: Deep Dive into User Testing",
    date: "26th Jan 2025",
    content: `
      <p>Our <strong>focus group discussion</strong> on January 26th, 2025, gave us deep insights into user preferences and pain points.</p>

      <h2>👩‍💻 User Feedback Highlights</h2>
      <ul>
        <li><strong>AI Engagement:</strong> Users found the chatbot experience engaging, but some wanted more spontaneous interactions.</li>
        <li><strong>Content Relevance:</strong> Many women requested more localized health content.</li>
        <li><strong>Motivation Boost:</strong> 85% of testers agreed that the storyline-based approach helped them stay committed.</li>
      </ul>

      <h2>💡 Lessons & Improvements</h2>
      <p>Based on this discussion, we are implementing:
      <ul>
        <li>More <strong>interactive dialogues</strong> with the AI.</li>
        <li>Personalized content recommendations based on location.</li>
        <li>A rewards system for completing wellness challenges.</li>
      </ul>
      </p>

      <p>Stay tuned for the next development phase as we refine Maibel.ai based on user feedback!</p>
    `,
    imageUrl: "/blog/sample.jpg",
  },
  {
    slug: "roadshow-testing",
    title: "Roadshow Testing: Engaging with Our First Users",
    date: "20th Jan 2025",
    content: `
      <p>On January 20th, 2025, we hosted our first <strong>roadshow testing event</strong>. 
      This was a major milestone for Maibel.ai as we took our AI-powered wellness coach 
      to real users and received invaluable feedback.</p>

      <h2>🔍 Key Insights from the Roadshow</h2>
      <ul>
        <li><strong>Personalization is key:</strong> Users loved customizing their AI coach's personality.</li>
        <li><strong>Gamification works:</strong> The ability to unlock storylines motivated users to stay engaged.</li>
        <li><strong>Community support:</strong> Many testers emphasized the need for a stronger peer support system.</li>
      </ul>

      <p>We are now working on refining the AI responses based on real-life interactions to make them even more intuitive.</p>

      <h2>🚀 What's Next?</h2>
      <p>Following the roadshow, we will be iterating on our coaching model and preparing for the <strong>focus group discussion</strong> happening on January 26th.</p>
    `,
    imageUrl: "/blog/roadshow_banner.jpg",
  },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <Link href="/blog">
        <span className="text-pink-500 hover:underline">&larr; Back to Blog</span>
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mt-4">{post.title}</h1>
      <p className="text-gray-600 mt-2">{post.date}</p>

      <div className="my-6 rounded-lg overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={687}
          height={400}
          layout="responsive"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className="prose max-w-none text-gray-800"
      />
    </article>
  );
}
