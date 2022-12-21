import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import Author from '../types/author';
import styled from '@emotion/styled';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  quote: string;
};

const PostHeader = ({ title, coverImage, date, author, quote }: Props) => {
  return (
    <>
      <div className="max-w-2xl mx-auto mt-8 sm:mt-16">
        <PostTitle>{title}</PostTitle>
        <div className={`text-gray font-light ${quote ? 'mb-5' : 'mb-20'}`}>
          <Avatar name={date} picture={author.picture} />
        </div>
        {quote && <Blockquote><p className='py-4'>{quote}</p></Blockquote>}
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
        {/* <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div> */}
      </div>
    </>
  );
};

const Blockquote = styled.blockquote`
    box-sizing: border-box;
    border-left: 0.25rem solid rgb(0, 0, 0, 0.2);
    margin: 0 0 1.7rem 0;
    padding: 0 1rem 0 1.25rem;
    background-color: rgb(0, 0, 0, 0.03);
`;

export default PostHeader;
