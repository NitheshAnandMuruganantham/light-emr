SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.doctor (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    address text NOT NULL,
    hospital_id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    password text NOT NULL,
    forgot_password_token_hash text,
    refresh_token_hash text
);
CREATE TABLE public.doctor_opinion (
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    data json DEFAULT json_build_object() NOT NULL,
    doctor_id uuid NOT NULL,
    user_id uuid NOT NULL,
    referances json DEFAULT json_build_array()
);
CREATE TABLE public.hospital (
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    address text NOT NULL,
    district text NOT NULL,
    state text NOT NULL,
    pin text NOT NULL,
    website text NOT NULL,
    certificates json DEFAULT json_build_object() NOT NULL,
    id uuid DEFAULT public.gen_random_uuid() NOT NULL
);
CREATE TABLE public.lab_technician (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    certificates json DEFAULT json_build_array() NOT NULL,
    lab_id uuid NOT NULL,
    password text NOT NULL,
    refresh_token_hash text,
    forgot_password_token_hash text
);
CREATE TABLE public.labs (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    address text NOT NULL,
    district text NOT NULL,
    state text NOT NULL,
    pin text NOT NULL,
    certificates json DEFAULT json_build_object() NOT NULL
);
CREATE TABLE public.prescription (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    data json DEFAULT json_build_array() NOT NULL,
    doctor_id uuid NOT NULL,
    user_id uuid NOT NULL
);
CREATE TABLE public.report (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id uuid NOT NULL,
    lab_technician_id uuid NOT NULL,
    data json DEFAULT json_build_object() NOT NULL
);
CREATE TABLE public."user" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    birth date NOT NULL,
    nationality text NOT NULL,
    profile json NOT NULL,
    height integer NOT NULL,
    weight integer NOT NULL,
    password text NOT NULL,
    blocked boolean DEFAULT false NOT NULL,
    email_verified boolean DEFAULT false NOT NULL,
    refresh_token_hash text,
    forgot_password_token_hash text,
    aadhar integer NOT NULL,
    pan text NOT NULL
);
ALTER TABLE ONLY public.doctor_opinion
    ADD CONSTRAINT doctor_opinion_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.doctor
    ADD CONSTRAINT doctor_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.hospital
    ADD CONSTRAINT hospital_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.lab_technician
    ADD CONSTRAINT lab_technician_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.labs
    ADD CONSTRAINT labs_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.report
    ADD CONSTRAINT medical_technologist_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.prescription
    ADD CONSTRAINT prescription_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_aadhar_key UNIQUE (aadhar);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_doctor_opinion_updated_at BEFORE UPDATE ON public.doctor_opinion FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_doctor_opinion_updated_at ON public.doctor_opinion IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_doctor_updated_at BEFORE UPDATE ON public.doctor FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_doctor_updated_at ON public.doctor IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_hospital_updated_at BEFORE UPDATE ON public.hospital FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_hospital_updated_at ON public.hospital IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_lab_technician_updated_at BEFORE UPDATE ON public.lab_technician FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_lab_technician_updated_at ON public.lab_technician IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_labs_updated_at BEFORE UPDATE ON public.labs FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_labs_updated_at ON public.labs IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_medical_technologist_updated_at BEFORE UPDATE ON public.report FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_medical_technologist_updated_at ON public.report IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_prescription_updated_at BEFORE UPDATE ON public.prescription FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_prescription_updated_at ON public.prescription IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_user_updated_at BEFORE UPDATE ON public."user" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_user_updated_at ON public."user" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.doctor
    ADD CONSTRAINT doctor_hospital_id_fkey FOREIGN KEY (hospital_id) REFERENCES public.hospital(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.doctor_opinion
    ADD CONSTRAINT doctor_opinion_doctor_id_fkey FOREIGN KEY (doctor_id) REFERENCES public.doctor(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.doctor_opinion
    ADD CONSTRAINT doctor_opinion_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.lab_technician
    ADD CONSTRAINT lab_technician_lab_id_fkey FOREIGN KEY (lab_id) REFERENCES public.labs(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.report
    ADD CONSTRAINT medical_technologist_lab_id_fkey FOREIGN KEY (lab_technician_id) REFERENCES public.labs(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.report
    ADD CONSTRAINT medical_technologist_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.prescription
    ADD CONSTRAINT prescription_doctor_id_fkey FOREIGN KEY (doctor_id) REFERENCES public.doctor(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.prescription
    ADD CONSTRAINT prescription_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
