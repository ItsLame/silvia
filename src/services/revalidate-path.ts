"use server";

import { revalidatePath, revalidateTag } from "next/cache";

const rePath = async (path = "") => {
  revalidatePath(path);
};

const reTag = async (tag = "") => {
  revalidateTag(tag);
};

export {
  rePath,
  reTag
};
