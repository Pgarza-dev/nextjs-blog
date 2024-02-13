export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of blog article',           
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of blog article',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: "titleImage",
            type: "image",
            title: "Title Image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "smallDescription",
            type: "string",
            title: "Small Description",
        },
        {
            name: "content",
            type: "array",
            title: "Content",
            of: [
                { type: "block" },
            ],
        },
        {
            name: "category",
            title: "Blog Category",
            type: "reference",
            to: [
                {
                    type: "category",
                },
            ],
        },
       
    ]
}