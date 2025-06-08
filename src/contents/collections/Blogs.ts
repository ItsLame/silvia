import type { CollectionConfig } from "payload";
import { Metadata } from "@/contents/common/Metadata";
import slugHook from "@/contents/hooks/slug-hook";
import revalidateHook from "@/contents/hooks/revalidate-hook";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  orderable: true,
  versions: {
    drafts: true,
  },
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
  hooks: {
    beforeChange: [slugHook.blogs],
    afterChange: [revalidateHook.blogs],
  }
};
