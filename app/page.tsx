import { getAllPosts, getAllCategories } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

export default async function HomePage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories()
  ])

  const featuredPost = posts[0]
  const remainingPosts = posts.slice(1)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-100 to-stone-200 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-4">Welcome to My Blog</p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 leading-tight mb-6">
              Stories, ideas, and insights.
            </h1>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
              A curated collection of thoughts on creativity, design, and the craft of writing well.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-500 mb-6">Featured</h2>
          <Link href={`/posts/${featuredPost.slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {featuredPost.metadata?.featured_image && (
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100">
                  <img
                    src={`${featuredPost.metadata.featured_image.imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div>
                {featuredPost.metadata?.category && (
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-3">
                    {featuredPost.metadata.category.title}
                  </span>
                )}
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {featuredPost.title}
                </h3>
                {featuredPost.metadata?.content && (
                  <p className="text-stone-600 text-lg leading-relaxed line-clamp-3 mb-4">
                    {featuredPost.metadata.content.replace(/<[^>]*>/g, '').slice(0, 200)}...
                  </p>
                )}
                {featuredPost.metadata?.author && (
                  <p className="text-sm text-stone-500">
                    By <span className="font-medium text-stone-700">{featuredPost.metadata.author.title}</span>
                  </p>
                )}
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Categories Bar */}
      {categories.length > 0 && (
        <section className="border-y border-stone-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-stone-500 mr-2">Browse:</span>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.slug}`}
                  className="px-4 py-1.5 text-sm font-medium text-stone-700 bg-stone-100 hover:bg-indigo-100 hover:text-indigo-700 rounded-full transition-colors"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Posts */}
      {remainingPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-500 mb-8">Latest Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {posts.length === 0 && (
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-stone-500">No posts yet. Check back soon!</p>
        </section>
      )}
    </div>
  )
}