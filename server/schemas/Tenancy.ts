import {defineType, defineField} from 'sanity'

export default defineType({
    name: "tenancy",
    title: "Tenancy",
    type: "document",
    fields: [
        defineField({
            name: "applied",
            title: "Applied",
            type: "datetime",
        }),
        defineField({
            name: "tenant",
            title: "Tenant",
            type: "string"
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "string",
        }),
        defineField({
            name: "totalIncome",
            title: "TotalIncome",
            type: "string"
        }),
        defineField({
            name: "incomeToRent",
            title: "IncomeToRent",
            type: "string",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "tenant",
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            }
        })
    ]
})