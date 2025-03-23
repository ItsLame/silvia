import type { CollectionConfig } from "payload";
import { Metadata } from "@/fields/Metadata";

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
          name: "title",
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
    Metadata
  ],
};
