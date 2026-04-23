import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <p className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-3">404</p>
      <h1 className="font-serif text-5xl font-bold text-stone-900 mb-4">Page not found</h1>
      <p className="text-stone-600 mb-8">The page you're looking for doesn't exist.</p>
      <Link href="/" className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
        Go home
      </Link>
    </div>
  )
}