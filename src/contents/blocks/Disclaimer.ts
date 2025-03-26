import { Block } from "payload";

export const Disclaimer: Block = {
  slug: "disclaimer",
  fields: [
    {
      name: "type",
      type: "select",
      options: ["info", "note", "success", "warning", "danger"]
    },
    {
      name: "text",
      type: "textarea",
    },
  ],
};
