import type { CollectionConfig } from "payload";
import { Metadata } from "@/contents/common/Metadata";

export const Projects: CollectionConfig = {
  slug: "projects",
  versions: {
    drafts: true,
    maxPerDoc: 10
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
            },
            {
              name: "designLink",
              type: "text"
            },
            {
              name: "paperLink",
              type: "text"
            }
          ]
        },
        Metadata
      ]
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, req, operation }) => {
        if (doc._status === "published" && operation === "update") {
          await req.payload.update({
            collection: "projects",
            id: doc.id,
            data: {
              // _status: "published",
              ...doc.data
            },
            context: { skipValidation: true },
          });
        }
        return doc;
      },
    ],
  }
};
