import { getPayload } from "payload";
import config from "@payload-config";

export const cmsClient = await getPayload({ config });
