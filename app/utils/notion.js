import "server-only";
import { NotionAPI } from 'notion-client'
import { Client } from "@notionhq/client";
import { cache } from "react";

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
        select: {
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
  
  