import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <li className="hover:bg-light-gray tex-avenir px-4 lg:px-5 py-4 my-4" key={slug}>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a>
          <h3 className="text-2xl font-bold leading-8 mb-2">{title}</h3>
          <p className="text-base text-gray leading-8">{excerpt}</p>
        </a>
      </Link>
    </li>
  );
}

export default PostPreview
