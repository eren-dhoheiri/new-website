import React from 'react';
import { parseISO, format } from 'date-fns';
import { useRouter } from 'next/router';

import { Title } from './title';
import { Avatar } from './avatar';

import { Badge } from './badge';
import { Author } from '../lib/blog/blog-api';

type Props = {
  title: string;
  date: string;
  author: Author;
  readingTime: string;
  tags: Array<string>;
};

export const PostHeader: React.FC<Props> = ({ title, date, author, readingTime, tags }) => {
  const router = useRouter();

  return (
    <div className="">
      <div className="container mx-auto max-w-4xl flex flex-col flex-grow justify-center px-5 overflow-x-hidden">
        <Title>{title}</Title>
        <div className="mt-4 flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:items-center">
          <Avatar name={author.name} picture={author.picture} />
          <div className="text-sm text-gray-700">
            {format(parseISO(date), 'LLLL d, yyyy')} • {readingTime}
          </div>
        </div>
        <div className="flex sm:flex-row-reverse font-mono text-sm text-gray-800 flex-wrap mb-4 gap-1">
          {tags.map((tag) => (
            <Badge
              key={tag}
              className="cursor-pointer duration-200 ease-in-out hover:bg-gray-200"
              onClick={() => {
                router.push(`/tags/${tag}`);
              }}
            >
              #{tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
