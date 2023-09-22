import { NotionPage } from "@/app/NotionPage";
// import { recordMap } from "@/app/utils/notion";
import { NotionAPI } from "notion-client";
import { parsePageId } from "notion-utils";
import { getPageContent, getPageBySlug, } from "@/app/utils/notion";

const Page = async ({ params }) => {
  const notion = new NotionAPI({
    activeUser: process.env.NOTION_ACTIVE_USER, 
    authToken: process.env.COOKIE
    })
  const post = await getPageBySlug(params.slug);
  // console.log("Post: ", post);
  
  const recordMap = await notion.getPage(post.id);
// console.log(post.properties)
// console.log(post.properties.Slug.rich_text[0].text.content)
  return <NotionPage recordMap={recordMap} />;
};

export default Page;
