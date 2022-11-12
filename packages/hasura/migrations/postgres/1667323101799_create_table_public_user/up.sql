CREATE TABLE "public"."user" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "name" text NOT NULL, "email" text NOT NULL, "birth" date NOT NULL, "nationality" text NOT NULL, "profile" json NOT NULL, "height" integer NOT NULL, "weight" integer NOT NULL, "password" text NOT NULL, "blocked" boolean NOT NULL DEFAULT false, "email_verified" boolean NOT NULL DEFAULT false, "refresh_token_hash" text NOT NULL, "forgot_password_token_hash" text NOT NULL, "aadhar" integer NOT NULL, "pan" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("aadhar"));
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
CREATE TRIGGER "set_public_user_updated_at"
BEFORE UPDATE ON "public"."user"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_user_updated_at" ON "public"."user" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;