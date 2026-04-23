import Link from 'next/link'
import { Post } from '@/types'

export default function PostCard({ post }: { post: Post }) {
  const category = post.metadata?.category
  const author = post.metadata?.author
  const image = post.metadata?.featured_image

  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <article className="h-full flex flex-col">
        {image && (
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-stone-100 mb-4">
            <img
              src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="flex-1">
          {category && (
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-2 block">
              {category.title}
            </span>
          )}
          <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
            {post.title}
          </h3>
          {post.metadata?.content && (
            <p className="text-sm text-stone-600 line-clamp-2 leading-relaxed">
              {post.metadata.content.replace(/<[^>]*>/g, '').slice(0, 120)}...
            </p>
          )}
          {author && (
            <p className="text-xs text-stone-500 mt-3">
              By <span className="font-medium text-stone-700">{author.title}</span>
            </p>
          )}
        </div>
      </article>
    </Link>
  )
}