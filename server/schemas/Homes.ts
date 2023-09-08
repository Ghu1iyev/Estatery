import {defineType, defineField} from 'sanity'

export default defineType({
    name: "home",
    title: "Home",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "string"
        }),
        defineField({
            name: "name",
            title: "Name",
            type: "string"
        }),
        defineField({
            name: "categories",
            title: "Status",
            type: "array",
            of: [{type: "reference", to: [{type: "statusCategory"}]}]
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name"
            }
        }),
        defineField({
            name: "address",
            title: "Address",
            type: "string"
        }),
        defineField({
            name: "bed",
            title: "Bed",
            type: "number"
        }),
        defineField({
            name: "bathroom",
            title: "Bathroom",
            type: "number"
        }),
        defineField({
            name: "dimenson",
            title: "Dimenson",
            type: "string"
        })
    ]
})