import type { CollectionConfig } from "payload";
import { Metadata } from "@/fields/Metadata";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "content",
      type: "group",
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
          name: "body",
          type: "richText",
          required: true,
        },
        {
          name: "repo link",
          type: "text"
        },
        {
          name: "demo link",
          type: "text"
        }
      ]
    },
    Metadata
  ],
};
