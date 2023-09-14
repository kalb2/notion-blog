'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { getPageTitle } from 'notion-utils';
import { NotionRenderer } from 'react-notion-x';
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'

export const NotionPage = ({
  recordMap,

}) => {
  if (!recordMap) {
    return null;
  }

  return (
    <>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        components={{
          nextLink: Link,
          Code,
          Collection,
        }}
      />
    </>
  );
};
