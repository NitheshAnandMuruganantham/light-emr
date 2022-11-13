alter table "public"."report"
  add constraint "report_lab_technician_id_fkey"
  foreign key ("lab_technician_id")
  references "public"."lab_technician"
  ("id") on update restrict on delete restrict;
