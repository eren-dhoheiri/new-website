import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SecondaryButton } from './secondary-button';
import { ArrowSmLeftIcon } from '@heroicons/react/outline';
import { Button } from './button';

export const Navigation: React.FC = () => {
  const router = useRouter();
  const isBackButtonVisible = router.pathname !== '/';

  return (
    <div className="container mx-auto max-w-4xl overflow-x-hidden">
      <nav className="flex flex-row items-center justify-between top-background sticky w-full h-20 md:h-28 bg-white bg-opacity-70 z-50 top-0 mb-8 backdrop-blur-xl">
        <div className="">
          {isBackButtonVisible && (
            <Button onClick={() => router.back()} data-testid={'back-button'}>
              <ArrowSmLeftIcon className="inline h-5 w-5 mr-1" />
            </Button>
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex-row space-x-2">
            <Link href="/">
              <SecondaryButton data-testid={'home'}>Home</SecondaryButton>
            </Link>
            <Link href="/about">
              <SecondaryButton data-testid={'about'}>About Me</SecondaryButton>
            </Link>
            <Link href="/blog">
              <SecondaryButton data-testid={'blog'}>Blog</SecondaryButton>
            </Link>
          </div>
        </div>
        {!isBackButtonVisible && <div></div>}
      </nav>
    </div>
  );
};
