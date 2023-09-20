import { NotionAPI } from "notion-client";
import { NotionPage } from "../NotionPage";
import { getPageBySlug, getPageContent, notionClient } from "../utils/notion";
import { BlogPages } from "../BlogPages";

export default async function Page({ params }) {
    const notion = new NotionAPI({
        activeUser: process.env.NOTION_ACTIVE_USER, 
        authToken: process.env.COOKIE
        })
 const recordMap = await notion.getPage('3259a1de358143d2bc429d6023b81179')
 
  return (
  <BlogPages recordMap={recordMap} />
  
)};
