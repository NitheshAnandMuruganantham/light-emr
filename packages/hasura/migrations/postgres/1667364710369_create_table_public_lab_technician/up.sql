CREATE TABLE "public"."lab_technician" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "name" text NOT NULL, "certificates" json NOT NULL DEFAULT json_build_array(), "lab_id" uuid NOT NULL, "password" text NOT NULL, "refresh_token_hash" text, "forgot_password_token_hash" text, PRIMARY KEY ("id") , FOREIGN KEY ("lab_id") REFERENCES "public"."labs"("id") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_lab_technician_updated_at"
BEFORE UPDATE ON "public"."lab_technician"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_lab_technician_updated_at" ON "public"."lab_technician" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
