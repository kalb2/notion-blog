import { NotionPage } from "@/app/NotionPage";
// import { recordMap } from "@/app/utils/notion";
import { NotionAPI } from "notion-client";
import { parsePageId, getPageTitle, getPageProperty } from "notion-utils";
import { getPageContent, getPageBySlug, getBlockIdBySlug, } from "@/app/utils/notion";

const Page = async ({ params }) => {
  const notion = new NotionAPI({
    activeUser: process.env.NOTION_ACTIVE_USER, 
    authToken: process.env.COOKIE
    })

// console.log(params)

const blockId = getBlockIdBySlug(params.slug)
// console.log(blockId)

const recordMap = await notion.getPage(blockId);


  // const post = await getPageBySlug(params.slug);
  // console.log("Post: ", post);
  
  // const recordMap = await notion.getPage(post.id);
  // console.log("RecordMap: ", recordMap)

// const pageTitle = getPageTitle(recordMap)
// console.log("PageTitle: ", pageTitle)

// const block = recordMap.block[post.id]?.value
// const propertyName = "Slug"; 
// const slugProperty = getPageProperty(propertyName, block, recordMap);

// if (slugProperty !== null) {
//   // The value of the "Slug" property is stored in the slugProperty variable
//   console.log("Slug:", slugProperty);
// } else {
//   console.log("Slug property not found for this page.");
// }


  // const pageContent = await getPageContent(post.id)
  // console.log("PageContent: ", pageContent)
// console.log(post.properties)
// console.log(post.properties.Slug.rich_text[0].text.content)
  return <NotionPage recordMap={recordMap} />;
};

export default Page;
