import { client } from "../service/sanity";

export const FetchData = async (type: any) => {
  return await client.fetch(type)
}

