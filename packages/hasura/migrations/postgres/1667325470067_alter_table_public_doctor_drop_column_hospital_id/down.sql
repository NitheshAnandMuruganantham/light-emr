alter table "public"."doctor" alter column "hospital_id" drop not null;
alter table "public"."doctor" add column "hospital_id" text;
