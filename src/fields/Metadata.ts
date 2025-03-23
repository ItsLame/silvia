import { Field } from "payload";
import { useUseTitleField } from "@payloadcms/ui";

export const Metadata: Field = {
  name: "metadata",
  type: "group",
  fields: [
    {
      name: "id",
      type: "number",
      index: true,
    },
    {
      name: "slug",
      type: "text",
      defaultValue: useUseTitleField
    },
    {
      name: "created date",
      type: "date",
      defaultValue: Date.now(),
    },
    {
      name: "updated date",
      type: "date",
      defaultValue: Date.now(),
    }
  ],
};
