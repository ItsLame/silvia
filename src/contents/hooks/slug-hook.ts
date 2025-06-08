import { CollectionBeforeChangeHook } from "payload";
import { Blog, Project } from "@/payload-types";

type CollectionTarget = Project | Blog;

const titleToSlug: CollectionBeforeChangeHook<CollectionTarget> = (dataConfig) => {
  const { data } = dataConfig;

  if (data.content == null || data.metadata == null) return data;

  // generate slug from title
  if (data.content.title) data.metadata.slug = data.content.title.toLowerCase().replace(/ /g, "-");

  return data;
};

const slugHook: {
  projects: CollectionBeforeChangeHook<Project>
  blogs: CollectionBeforeChangeHook<Blog>
} = {
  projects: titleToSlug,
  blogs: titleToSlug,
};

export default slugHook;
