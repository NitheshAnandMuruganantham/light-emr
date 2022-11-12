alter table "public"."doctor"
  add constraint "doctor_hospital_id_fkey"
  foreign key ("hospital_id")
  references "public"."hospital"
  ("id") on update restrict on delete restrict;
