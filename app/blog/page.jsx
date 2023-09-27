import { NotionAPI } from "notion-client";
import { NotionPage } from "../NotionPage";
import { getPageBySlug, getPageContent, notionClient, recordMap } from "../utils/notion";
import { BlogPages } from "../BlogPages";
import { getPages } from "../utils/notion";

export default async function Page({ params }) {
    const notion = new NotionAPI({
        activeUser: process.env.NOTION_ACTIVE_USER, 
        authToken: process.env.COOKIE
        })
//  const recordMap = await notion.getPage('3259a1de358143d2bc429d6023b81179')

  const recordMap = await notion.getPage('aa9e9c19a2d5420fa6411ed446d06838')
 
const pages = await getPages()
// const pages = await getPageContent('5f49cc7e73454ef1b8e991d386e0f67e')
// console.log(pages)
// console.log(pages.results)
//  console.log(recordMap)

// const blocks = await getPageContentBlockIds("df07a7b4-74e4-4382-9425-4d86d1cb872e")
// console.log(blocks)

return (
    <>
  <BlogPages recordMap={recordMap}  />
    
    </>
)};
// console.log(recordMap.block)