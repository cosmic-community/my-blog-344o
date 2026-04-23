import { getAllAuthors } from '@/lib/cosmic'
import Link from 'next/link'

export const metadata = { title: 'Authors - My Blog' }

export default async function AuthorsPage() {
  const authors = await getAllAuthors()

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-3">Our Team</p>
        <h1 className="font-serif text-5xl font-bold text-stone-900">Authors</h1>
      </div>

      {authors.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author) => (
            <Link
              key={author.id}
              href={`/authors/${author.slug}`}
              className="group bg-white rounded-2xl p-6 border border-stone-200 hover:border-indigo-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                {author.metadata?.profile_photo ? (
                  <img
                    src={`${author.metadata.profile_photo.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
                    alt={author.title}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-semibold text-xl">
                    {author.title.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-lg text-stone-900 group-hover:text-indigo-600 transition-colors">
                    {author.title}
                  </h3>
                </div>
              </div>
              {author.metadata?.bio && (
                <p className="text-stone-600 text-sm line-clamp-3">{author.metadata.bio}</p>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-stone-500">No authors yet.</p>
      )}
    </div>
  )
}