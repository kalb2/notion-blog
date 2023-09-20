"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { getPageTitle } from "notion-utils";
import { NotionRenderer, defaultMapPageUrl } from "react-notion-x";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";

export const BlogPages = ({
  recordMap,
  previewImagesEnabled,
  rootDomain,
  rootPageId,
  // mapPageUrl
}) => {
  if (!recordMap) {
    return null;
  }
  // const mapPageUrl = id => {
  //   return 'https://www.notion.so/' + id.replace(/-/g, '')
  // }

  // const mapPageUrl = (slug) => {
  //   return `/blog/${slug}`;
  // };
  const mapPageUrl = (slug) => {
    return `/blog/blog-post`;
  };


  // {`/Blog/${post.slug}`}

  return (
    <>
      <NotionRenderer
        recordMap={recordMap}
        rootPageId={rootPageId}
        isLinkCollectionToUrlProperty={true}
        rootDomain={rootDomain}
        previewImages={previewImagesEnabled}
        fullPage={true}
        darkMode={true}
        mapPageUrl={mapPageUrl}
        components={{
          nextLink: Link,
          nextImage: Image,
          Code,
          Collection,
          // PageLink: ({ className, href, children }) => {
          //   return (
          //     <Link className={className} href={`/blog${href}`}>{children}</Link>
          //   )}
          // Link href={`/blog/${post.slug}`}
        }}
      />
    </>
  );
};