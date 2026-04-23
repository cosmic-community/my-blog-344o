import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold text-stone-900 hover:text-indigo-600 transition-colors">
          My Blog
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-stone-700 hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <Link href="/posts" className="text-sm font-medium text-stone-700 hover:text-indigo-600 transition-colors">
            Posts
          </Link>
          <Link href="/authors" className="text-sm font-medium text-stone-700 hover:text-indigo-600 transition-colors hidden sm:block">
            Authors
          </Link>
          <Link href="/categories" className="text-sm font-medium text-stone-700 hover:text-indigo-600 transition-colors hidden sm:block">
            Categories
          </Link>
        </nav>
      </div>
    </header>
  )
}