alter table "public"."report"
  add constraint "medical_technologist_lab_id_fkey"
  foreign key ("lab_technician_id")
  references "public"."labs"
  ("id") on update restrict on delete restrict;
