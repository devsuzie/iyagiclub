import PostPreview from './post-preview';
import Post from '../types/post';

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <>
      <h2 className="text-5xl font-futura font-bold mb-6">Stories</h2>
      <ul className="grid grid-cols-1 gap-8 mb-20 lg:grid-cols-2">
        {posts.map(post => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </ul>
    </>
  );
};

export default MoreStories;
