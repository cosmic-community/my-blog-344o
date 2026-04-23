import { getAllPosts } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'

export const metadata = {
  title: 'All Posts - My Blog',
}

export default async function PostsPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-3">Archive</p>
        <h1 className="font-serif text-5xl font-bold text-stone-900">All Posts</h1>
        <p className="text-stone-600 mt-3">{posts.length} {posts.length === 1 ? 'post' : 'posts'}</p>
      </div>

      {posts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-stone-500">No posts yet.</p>
      )}
    </div>
  )
}