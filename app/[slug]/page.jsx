import { NotionAPI } from "notion-client";
import { recordMap } from "../utils/notion";
import { NotionPage } from "../NotionPage";

const Page = async ({ params: { pageId } }) => {
    const notion = new NotionAPI();
    // const recordMap = await notion.getPage(pageId);
  
    return (
        <NotionPage
          recordMap={recordMap}
        />
    );
  };
  
  export default Page;