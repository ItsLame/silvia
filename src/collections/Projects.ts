import type { CollectionConfig } from "payload";
import { Metadata } from "@/fields/Metadata";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "data",
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
        }
      ]
    },
    Metadata
  ],
};
