import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="font-serif text-xl font-bold text-stone-900">My Blog</p>
            <p className="text-sm text-stone-500 mt-1">Stories, ideas, and insights.</p>
          </div>
          <nav className="flex gap-6 text-sm">
            <Link href="/posts" className="text-stone-600 hover:text-indigo-600">Posts</Link>
            <Link href="/authors" className="text-stone-600 hover:text-indigo-600">Authors</Link>
            <Link href="/categories" className="text-stone-600 hover:text-indigo-600">Categories</Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-stone-100 text-xs text-stone-400 text-center">
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </div>
      </div>
    </footer>
  )
}