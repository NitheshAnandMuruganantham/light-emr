alter table "public"."hospital" add column "certificates" json
 not null default json_build_object();
