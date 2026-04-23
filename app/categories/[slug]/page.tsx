// app/categories/[slug]/page.tsx
import { getCategoryBySlug, getPostsByCategory, getAllCategories } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map((c) => ({ slug: c.slug }))
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) notFound()

  const posts = await getPostsByCategory(category.id)

  return (
    <div>
      <section className="bg-gradient-to-br from-stone-100 to-stone-200 border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <p className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-3">Category</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-stone-900 mb-4">{category.title}</h1>
          {category.metadata?.description && (
            <p className="text-stone-600 text-lg leading-relaxed">{category.metadata.description}</p>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-sm text-stone-500 mb-8">{posts.length} {posts.length === 1 ? 'post' : 'posts'}</p>
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-stone-500">No posts in this category yet.</p>
        )}

        <div className="mt-12">
          <Link href="/categories" className="text-indigo-600 hover:text-indigo-800 font-medium">
            ← All categories
          </Link>
        </div>
      </section>
    </div>
  )
}