import { Tab } from "payload";

export const Metadata: Tab = {
  name: "metadata",
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true
    },
    {
      name: "customCreatedDate",
      type: "date",
    },
    {
      name: "customUpdatedDate",
      type: "date",
    },
    {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "tag",
          type: "text"
        }
      ]
    }
  ],
};
