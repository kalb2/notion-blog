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
}) => {
  if (!recordMap) {
    return null;
  }

  // const mapPageUrl = id => {
  //   return 'https://www.notion.so/' + id.replace(/-/g, '')
  // }

  // const mapPageUrl = anything => {
  //   return `/blog/` + anything;
  // };

  //   const mapPageUrl = (slug) => {
  //     return `/blog/blog-post`;
  //   };
  // console.log("PageId: ",rootPageId)

  // const mapPageUrl = block.id

//   const pageObjects = Object.values(recordMap.block).filter(
//     (item) => item.value && item.value.type === "page"
//   );
//   // Extract the slugs from the pageObjects
//   const slugs = pageObjects.map((pageObject) => {
//     return pageObject.value.properties?._hTE ;
//   });
//   // console.log(pageObjects[1].value.properties._hTE[0])
// console.log(slugs)
//   // Define the mapPageUrl function
//   const mapPageUrl = (slug) => {
//     // Use the extracted slug to construct the URL
//     return `/blog/${slug}`;
//   };
  // Create a function to extract slugs and associate them with block IDs
  const extractSlugsAndBlockIds = (recordMap) => {
    return Object.values(recordMap.block)
      .filter((block) => block.value.type === "page")
      .map((block) => {
        const slugArray = block.value.properties?._hTE;
        if (Array.isArray(slugArray) && slugArray.length > 0) {
          const slug = slugArray[0][0];
          return { slug, blockId: block.value.id };
        }
        return null;
      })
      .filter((item) => item !== null);
  };

  // Extract slugs and block IDs
  const slugsAndBlockIds = extractSlugsAndBlockIds(recordMap);
// console.log(slugsAndBlockIds)

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

    // Default behavior
    return defaultMapPageUrl(blockId); // Fallback to default behavior
  };


  return (
    <>
      <NotionRenderer
        recordMap={recordMap}
        rootPageId={rootPageId}
        isLinkCollectionToUrlProperty
        rootDomain={rootDomain}
        previewImages={previewImagesEnabled}
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
      {/* {console.log("PageLink Component:", recordMap)} */}
    </>
  );
};
