CREATE TABLE "public"."hospital" ("id" serial NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "name" text NOT NULL, "address" text NOT NULL, "district" text NOT NULL, "state" text NOT NULL, "pin" text NOT NULL, "website" text NOT NULL, PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_hospital_updated_at"
BEFORE UPDATE ON "public"."hospital"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_hospital_updated_at" ON "public"."hospital" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
