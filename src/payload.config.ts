// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { BlocksFeature, defaultEditorFeatures, FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "@/contents/collections/Users";
import { Media } from "@/contents/collections/Media";
import { Projects } from "@/contents/collections/Projects";
import { Blogs } from "@/contents/collections/Blogs";
import { Disclaimer } from "@/contents/blocks/Disclaimer";
import { CodeBlock } from "@/contents/blocks/CodeBlock";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Projects, Blogs],
  editor: lexicalEditor({
    features: [
      ...defaultEditorFeatures,
      FixedToolbarFeature(),
      BlocksFeature({
        blocks: [Disclaimer, CodeBlock]
      }),
    ]
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
});
