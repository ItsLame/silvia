import type { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "content",
      type: "group",
      fields: [
        {
          name: "blog title",
          type: "text",
          required: true,
        },
        {
          name: "body",
          type: "richText",
          required: true,
        },
      ]
    },
    {
      name: "other info",
      type: "group",
      fields: [
        {
          name: "id",
          type: "number"
        },
        {
          name: "slug",
          type: "text"
        },
        {
          name: "publish date",
          type: "date",
        },
        {
          name: "update date",
          type: "date",
        }
      ],
    },
  ],
  upload: true,
};
