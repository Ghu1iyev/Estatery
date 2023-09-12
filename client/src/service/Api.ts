import { client } from "./sanity"

export const FetchData = async (type: any) => {
    return await client.fetch(type)
}

export const PostData = async (type: any) => {
    return await client.create(type)
}