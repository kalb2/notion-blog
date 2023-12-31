import "server-only";
import { NotionAPI } from 'notion-client'
import { Client } from "@notionhq/client";
import { cache } from "react";
import { getPageProperty } from "notion-utils";

const notion = new NotionAPI({
    activeUser: process.env.NOTION_ACTIVE_USER, 
    authToken: process.env.COOKIE
    })

export const recordMap = await notion.getPage('3259a1de358143d2bc429d6023b81179')


export const notionClient = new Client({
    auth: process.env.NOTION_TOKEN,
  });
  
//   console.log(notionClient.databases)
  export const getPages = cache(() => {
    return notionClient.databases.query({
      filter: {
        property: "Status",
        status: {
          equals: "Published",
        },
      },
      database_id: process.env.NOTION_DATABASE_ID,
    });
  });
  
  export const getPageContent = cache(async (pageId) => {
    const res = await notionClient.blocks.children
      .list({ block_id: pageId });
    return res.results;
  });
  
  export const getPageBySlug = cache(async (slug) => {
    const res = await notionClient.databases
      .query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
          property: "Slug",
          rich_text: { 
            equals: slug,
          },
        },
      });
    return res.results[0] ;
  });

  export const extractSlugsAndBlockIds = (recordMap) => {
  return Object.values(recordMap.block)
    .filter((block) => block.value.type === 'page')
    .map((block) => {
      const slug = getPageProperty('slug', block.value, recordMap);
      return slug ? { slug, blockId: block.value.id } : null;
    })
    .filter(Boolean); // Removes null values from the array
};

  export const getBlockIdBySlug = (targetSlug) => {
    const slugsAndBlockIds = extractSlugsAndBlockIds(recordMap);
    const matchingItem = slugsAndBlockIds.find((item) => item.slug === targetSlug);
    return matchingItem ? matchingItem.blockId : null;
  };