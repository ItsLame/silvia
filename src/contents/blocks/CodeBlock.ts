import { Block } from "payload";

export const CodeBlock: Block = {
  slug: "code-block",
  fields: [
    {
      name: "language",
      type: "select",
      options: ["javascript", "typescript", "shell", "bash", "python"]
    },
    {
      name: "code",
      type: "code",
    },
  ],
};
