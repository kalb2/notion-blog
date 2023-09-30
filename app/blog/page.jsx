import { NotionAPI } from "notion-client";
import { NotionPage } from "../NotionPage";
import { getPageBySlug, getPageContent, notionClient, recordMap } from "../utils/notion";
import { BlogPages } from "../BlogPages";

export default async function Page({ params }) {
    const notion = new NotionAPI({
        activeUser: process.env.NOTION_ACTIVE_USER, 
        authToken: process.env.COOKIE
        })
 const recordMap = await notion.getPage('3259a1de358143d2bc429d6023b81179')
// console.log(recordMap.collection_query)
  // const recordMap = await notion.getPage('aa9e9c19a2d5420fa6411ed446d06838')

  const collectionId = 'df07a7b4-74e4-4382-9425-4d86d1cb872e'
  const collectionViewId = 'b7d9aa2e-83db-40fd-8829-eaef3bce257b'
const collectiondata = await notion.getCollectionData(collectionId,collectionViewId)
console.log(collectiondata)
return (
    <>
  <BlogPages recordMap={recordMap}  />
    
    </>
)};