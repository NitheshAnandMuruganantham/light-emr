CREATE EXTENSION IF NOT EXISTS pgcrypto;
alter table "public"."doctor" add column "hospital_id" uuid
 not null default gen_random_uuid();
