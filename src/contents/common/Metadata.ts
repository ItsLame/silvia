import { Tab } from "payload";

export const Metadata: Tab = {
  name: "metadata",
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
    },
    {
      name: "order",
      type: "number",
    },
    {
      name: "customCreatedDate",
      type: "date",
    },
    {
      name: "customUpdatedDate",
      type: "date",
    }
  ],
};
