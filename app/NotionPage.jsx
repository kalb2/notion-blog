'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { getPageTitle } from 'notion-utils';
import { NotionRenderer, defaultMapPageUrl } from 'react-notion-x';
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'

export const NotionPage = ({
    recordMap,
    previewImagesEnabled,
    rootDomain,
    rootPageId,
    // mapPageUrl
  }) => {
    if (!recordMap) {
      return null;
    }

    const mapPageUrl = slug => {
      return `/blog/${slug}`;
    };

    return (
      <>
        <NotionRenderer
          recordMap={recordMap}
          rootPageId={rootPageId}
          isLinkCollectionToUrlProperty ={true}
          rootDomain={rootDomain}
          previewImages ={previewImagesEnabled}
          fullPage={true}
          darkMode={false}
          mapPageUrl={mapPageUrl}
          disableHeader
          components={{
            nextLink: Link,
            nextImage: Image,
            Code,
            Collection,
          }}
        />
      </>
    );
  };