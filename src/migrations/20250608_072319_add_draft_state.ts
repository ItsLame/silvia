import { MigrateDownArgs, MigrateUpArgs, } from "@payloadcms/db-mongodb";

export async function up({ payload, req, session }: MigrateUpArgs): Promise<void> {
  await payload.update({
    collection: "projects",
    where: {},
    data: { _status: "draft" },
  });

  await payload.update({
    collection: "blogs",
    where: {},
    data: { _status: "draft" },
  });
}

export async function down({ payload, req, session }: MigrateDownArgs): Promise<void> {
  // No rollback
}
