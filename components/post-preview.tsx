import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import Author from '../types/author';
import styled from '@emotion/styled';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, author, slug }: Props) => {
  return (
    <List className="p-8">
      <Link as={`/stories/${slug}`} href="/stories/[slug]">
        <a>
          <h3 className="text-2xl font-bold leading-8 mb-2">{title}</h3>
          <p className="text-base text-gray leading-6 truncate overflow-hidden">{excerpt}</p>
        </a>
      </Link>
    </List>
  );
};

const List = styled.li`
  border-radius: 0.5rem;
  border: 1px solid black;
  box-shadow: 5px 5px 0 0 black;

  &:hover {
    box-shadow: 8px 8px 0 0 black;
  }
`;

export default PostPreview;
