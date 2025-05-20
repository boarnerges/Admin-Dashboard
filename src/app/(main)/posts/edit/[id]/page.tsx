// src/app/(main)/posts/edit/[id]/page.tsx
import posts from "@/../data/post";
import PostEditPage from "./PostEditPage";

// With App Router, page components need to use this specific format
export default function Page({ params }: { params: { id: string } }) {
  // Find the post in your data
  const post = posts.find((post) => post.id === params.id);

  return <PostEditPage post={post} />;
}
