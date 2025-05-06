import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

// export const metadata = {
//   title: 'Browse all our X posts.',
//   description: 'Browse all our posts.'
// }
let cachedMetadata;

export async function generateMetadata() {
  if (cachedMetadata) {
    return cachedMetadata;
  }
  const posts = await getPosts();
  const numberOfPosts = posts.length;
  cachedMetadata = {
    title: `Browse all our ${numberOfPosts} posts.`,
    description: "Browse all our posts.",
  };
  return cachedMetadata;
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
