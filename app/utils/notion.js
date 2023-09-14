import { NotionAPI } from 'notion-client'

const notion = new NotionAPI({
    activeUser: process.env.NOTION_ACTIVE_USER, 
    authToken: process.env.COOKIE
    })

export const recordMap = await notion.getPage('aa9e9c19a2d5420fa6411ed446d06838')