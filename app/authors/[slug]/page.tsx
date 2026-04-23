// app/authors/[slug]/page.tsx
import { getAuthorBySlug, getPostsByAuthor, getAllAuthors } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

export async function generateStaticParams() {
  const authors = await getAllAuthors()
  return authors.map((a) => ({ slug: a.slug }))
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) notFound()

  const posts = await getPostsByAuthor(author.id)

  return (
    <div>
      <section className="bg-gradient-to-br from-stone-100 to-stone-200 border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          {author.metadata?.profile_photo ? (
            <img
              src={`${author.metadata.profile_photo.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
              alt={author.title}
              className="w-28 h-28 rounded-full object-cover mx-auto mb-6 ring-4 ring-white shadow-lg"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-stone-300 flex items-center justify-center text-stone-600 font-bold text-3xl mx-auto mb-6">
              {author.title.charAt(0)}
            </div>
          )}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">{author.title}</h1>
          {author.metadata?.bio && (
            <p className="text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed">{author.metadata.bio}</p>
          )}
          {author.metadata?.email && (
            <a href={`mailto:${author.metadata.email}`} className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium">
              {author.metadata.email}
            </a>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-serif text-3xl font-bold text-stone-900 mb-8">
          Posts by {author.title}
        </h2>
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-stone-500">No posts by this author yet.</p>
        )}

        <div className="mt-12">
          <Link href="/authors" className="text-indigo-600 hover:text-indigo-800 font-medium">
            ← All authors
          </Link>
        </div>
      </section>
    </div>
  )
}