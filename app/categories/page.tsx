import { getAllCategories } from '@/lib/cosmic'
import Link from 'next/link'

export const metadata = { title: 'Categories - My Blog' }

export default async function CategoriesPage() {
  const categories = await getAllCategories()

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-3">Explore</p>
        <h1 className="font-serif text-5xl font-bold text-stone-900">Categories</h1>
      </div>

      {categories.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="group block bg-white rounded-2xl p-8 border border-stone-200 hover:border-indigo-300 hover:shadow-lg transition-all"
            >
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {cat.title}
              </h3>
              {cat.metadata?.description && (
                <p className="text-stone-600 line-clamp-2">{cat.metadata.description}</p>
              )}
              <span className="inline-block mt-4 text-sm font-medium text-indigo-600">Explore →</span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-stone-500">No categories yet.</p>
      )}
    </div>
  )
}