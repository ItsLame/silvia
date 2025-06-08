import { MigrateDownArgs, MigrateUpArgs, } from "@payloadcms/db-mongodb";

export async function up({ payload, req, session }: MigrateUpArgs): Promise<void> {
  await payload.db.collections["projects"].updateMany(
    {},
    { $unset: { metadata: { order: null } } }
  );

  await payload.db.collections["blogs"].updateMany(
    {},
    { $unset: { metadata: { order: null } } }
  );
}

export async function down({ payload, req, session }: MigrateDownArgs): Promise<void> {
  await payload.db.collections["projects"].updateMany(
    {},
    { $set: { metadata: { order: null } } }
  );

  await payload.db.collections["blogs"].updateMany(
    {},
    { $set: { metadata: { order: null } } }
  );
}
