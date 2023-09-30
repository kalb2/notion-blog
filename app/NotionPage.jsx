"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import {
  getBlockTitle,
  getCanonicalPageId,
  getPageProperty,
  getPageTitle,
  normalizeTitle,
} from "notion-utils";
import { NotionRenderer, defaultMapPageUrl } from "react-notion-x";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";

export const NotionPage = ({
  recordMap,
  previewImagesEnabled,
  rootDomain,
  rootPageId,
  // slug
  // mapPageUrl
}) => {
  if (!recordMap) {
    return null;
  }

  // const mapPageUrl = (recordMap) => {
  //   return `/blog/${recordMap}`;
  // };
  //   const block = recordMap.block['aa9e9c19a2d5420fa6411ed446d06838']?.value

  //   const slug =
  //   (getPageProperty('slug', block, recordMap)) ||
  //   (getPageProperty('Slug', block, recordMap)) ||
  //   // normalizeTitle(getBlockTitle(block, recordMap));
  // console.log(slug)

  
const extractSlugsAndBlockIds = (recordMap) => {
  return Object.values(recordMap.block)
    .filter((block) => block.value.type === 'page')
    .map((block) => {
      const slug = getPageProperty('Slug', block.value, recordMap);
      return slug ? { slug, blockId: block.value.id } : null;
    })
    .filter(Boolean); // Removes null values from the array
};
  // console.log("recordMapBlock: ", recordMap.block)

  // Extract slugs and block IDs
  const slugsAndBlockIds = extractSlugsAndBlockIds(recordMap);
  // console.log(slugsAndBlockIds);

  // Define the mapPageUrl function
  const mapPageUrl = (blockId) => {
    // Find the corresponding slug using the blockId
    const slugObject = slugsAndBlockIds.find(
      (entry) => entry.blockId === blockId
    );

    if (slugObject) {
      const linkUrl = `/blog/${slugObject.slug}`;
      return linkUrl;
    }

    // return defaultMapPageUrl(blockId);
  };

  const CustomHeader = () => {
    return (
      <header>
        <nav style={{textAlign: 'center'}}>
          <Link href="/blog">
            Home
          </Link>
        </nav>
      </header>
    );
  };


  return (
    <>
      <NotionRenderer
        recordMap={recordMap}
        rootPageId={rootPageId}
        isLinkCollectionToUrlProperty={true}
        rootDomain={rootDomain}
        previewImages={previewImagesEnabled}
        fullPage={true}
        darkMode={false}
        mapPageUrl={mapPageUrl}
        header={<CustomHeader />}
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
