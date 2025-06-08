import { CollectionAfterChangeHook } from "payload";
import { Blog, Project } from "@/payload-types";
import { rePath } from "@/services/revalidate-path";

type CollectionTarget = Project | Blog;

const revalidate: CollectionAfterChangeHook<CollectionTarget> = async (dataConfig) => {
  const { doc, previousDoc, req: { payload, context }, collection: { slug } } = dataConfig;

  if (context.disableRevalidate) return doc;

  if (doc._status === "published") {
    const path = `/${slug}`;
    payload.logger.info(`Revalidating path: ${path}`);
    await rePath(path);
  }

  // if the post was previously published, revalidate the old path
  if (previousDoc._status === "published" && doc._status !== "published") {
    const oldPath = `/${slug}`;
    payload.logger.info(`Revalidating old path: ${oldPath}`);
    await rePath(oldPath);
  }

  return doc;
};

// if I want to somehow customize revalidation further, not needed for now though
// const revalidateProjects: CollectionAfterChangeHook<Project> = (data) => revalidate(data);
// const revalidateBlogs: CollectionAfterChangeHook<Blog> = (data) => revalidate(data);

const revalidateHook: {
  projects: CollectionAfterChangeHook<Project>
  blogs: CollectionAfterChangeHook<Blog>
} = {
  projects: revalidate,
  blogs: revalidate
};

export default revalidateHook;
