import sanityClient from '@sanity/client'
import imageurlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId : import.meta.env.VITE_PROJECT_ID,
    token: import.meta.env.VITE_TOKEN,
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true
})

const builder = imageurlBuilder(client);

export const urlFor = (source: string) => {
    return builder.image(source)
} 