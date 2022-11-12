alter table "public"."hospital" alter column "id" set default nextval('hospital_id_seq'::regclass);
alter table "public"."hospital" alter column "id" drop not null;
alter table "public"."hospital" add column "id" int4;
