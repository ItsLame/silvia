import { getPayload } from "payload";
import config from "@payload-config";

export const apiClient = await getPayload({ config });
