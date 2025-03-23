import { Field } from "payload";

export const Metadata: Field = {
  name: "metadata",
  type: "group",
  fields: [
    {
      name: "order",
      type: "number",
    },
    {
      name: "slug",
      type: "text",
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
