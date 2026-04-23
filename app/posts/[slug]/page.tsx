// app/posts/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  const tags = Array.isArray(post.metadata?.tags)
    ? post.metadata.tags
    : typeof post.metadata?.tags === 'string'
    ? post.metadata.tags.split(',').map((t: string) => t.trim()).filter(Boolean)
    : []

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* Meta */}
      <div className="mb-6">
        {post.metadata?.category && (
          <Link
            href={`/categories/${post.metadata.category.slug}`}
            className="inline-block text-sm font-semibold uppercase tracking-wider text-indigo-600 hover:text-indigo-800"
          >
            {post.metadata.category.title}
          </Link>
        )}
      </div>

      {/* Title */}
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
        {post.title}
      </h1>

      {/* Author */}
      {post.metadata?.author && (
        <div className="flex items-center gap-3 mb-8 pb-8 border-b border-stone-200">
          {post.metadata.author.metadata?.profile_photo && (
            <img
              src={`${post.metadata.author.metadata.profile_photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
              alt={post.metadata.author.title}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div>
            <Link href={`/authors/${post.metadata.author.slug}`} className="font-medium text-stone-900 hover:text-indigo-600">
              {post.metadata.author.title}
            </Link>
            <p className="text-sm text-stone-500">
              {new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      )}

      {/* Featured Image */}
      {post.metadata?.featured_image && (
        <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-stone-100 mb-10">
          <img
            src={`${post.metadata.featured_image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      {post.metadata?.content && (
        <div
          className="prose prose-stone prose-lg max-w-none prose-headings:font-serif prose-a:text-indigo-600"
          dangerouslySetInnerHTML={{ __html: post.metadata.content }}
        />
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-stone-200">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string, i: number) => (
              <span key={i} className="px-3 py-1 text-xs font-medium bg-stone-100 text-stone-700 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12">
        <Link href="/posts" className="text-indigo-600 hover:text-indigo-800 font-medium">
          ← All posts
        </Link>
      </div>
    </article>
  )
}