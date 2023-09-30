import { NotionPage } from "@/app/NotionPage";
import { NotionAPI } from "notion-client";
import { getBlockIdBySlug, } from "@/app/utils/slugs";
import { getPageBreadcrumbs, getPageTitle, getTextContent, normalizeUrl } from "notion-utils";

export default async function Page({ params }) {
  const notion = new NotionAPI({
    activeUser: process.env.NOTION_ACTIVE_USER, 
    authToken: process.env.COOKIE
    })

// console.log(params)

const blockId = getBlockIdBySlug(params.slug)
// console.log("blockID: ", blockId)
const targetSlug = blockId ? blockId : params.slug;
// console.log(targetSlug)

// const recordMap = await notion.getPage(blockId);
const recordMap = await notion.getPage(targetSlug);

// const bread = getPageBreadcrumbs(recordMap, blockId)
// console.log(bread)
  return <NotionPage recordMap={recordMap} />;
};

