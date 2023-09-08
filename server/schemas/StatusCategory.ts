import { defineField, defineType } from "sanity";

export default defineType({
    name: "statusCategory",
    title: "StatusCategory",
    type: "document",

    fields: [
        defineField({
            name: "status",
            title: "Status",
            type: "string"
        })
    ]
})