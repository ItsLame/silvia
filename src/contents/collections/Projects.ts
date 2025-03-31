import type { CollectionConfig } from "payload";
import { Metadata } from "@/contents/common/Metadata";

export const Projects: CollectionConfig = {
  slug: "projects",
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
              name: "thumbnail",
              type: "relationship",
              relationTo: "media"
            },
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "text",
            },
            {
              name: "body",
              type: "richText",
            },
            {
              name: "repoLink",
              type: "text"
            },
            {
              name: "demoLink",
              type: "text"
            },
            {
              name: "videoLink",
              type: "text"
            }
          ]
        },
        Metadata
      ]
    },
  ],
};
