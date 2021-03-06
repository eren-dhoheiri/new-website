import React from 'react';

export const PostBody: React.FC = ({ children }) => {
  return <div className="w-full prose lg:prose-lg overflow-y-hidden">{children}</div>;
};
