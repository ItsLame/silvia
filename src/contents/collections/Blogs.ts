import type { CollectionConfig } from "payload";
import { Metadata } from "@/contents/common/Metadata";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "content",
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
            }
          ]
        },
        Metadata
      ],
    },
  ],
};
