import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  json: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "doctor" */
export type Doctor = {
  __typename?: 'doctor';
  address: Scalars['String'];
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  doctor_opinions: Array<Doctor_Opinion>;
  /** An aggregate relationship */
  doctor_opinions_aggregate: Doctor_Opinion_Aggregate;
  email: Scalars['String'];
  forgot_password_token_hash?: Maybe<Scalars['String']>;
  /** An object relationship */
  hospital: Hospital;
  hospital_id: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  password: Scalars['String'];
  /** An array relationship */
  prescriptions: Array<Prescription>;
  /** An aggregate relationship */
  prescriptions_aggregate: Prescription_Aggregate;
  refresh_token_hash?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "doctor" */
export type DoctorDoctor_OpinionsArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Opinion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Doctor_Opinion_Order_By>>;
  where?: InputMaybe<Doctor_Opinion_Bool_Exp>;
};


/** columns and relationships of "doctor" */
export type DoctorDoctor_Opinions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Opinion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Doctor_Opinion_Order_By>>;
  where?: InputMaybe<Doctor_Opinion_Bool_Exp>;
};


/** columns and relationships of "doctor" */
export type DoctorPrescriptionsArgs = {
  distinct_on?: InputMaybe<Array<Prescription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prescription_Order_By>>;
  where?: InputMaybe<Prescription_Bool_Exp>;
};


/** columns and relationships of "doctor" */
export type DoctorPrescriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prescription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prescription_Order_By>>;
  where?: InputMaybe<Prescription_Bool_Exp>;
};

/** aggregated selection of "doctor" */
export type Doctor_Aggregate = {
  __typename?: 'doctor_aggregate';
  aggregate?: Maybe<Doctor_Aggregate_Fields>;
  nodes: Array<Doctor>;
};

/** aggregate fields of "doctor" */
export type Doctor_Aggregate_Fields = {
  __typename?: 'doctor_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Doctor_Max_Fields>;
  min?: Maybe<Doctor_Min_Fields>;
};


/** aggregate fields of "doctor" */
export type Doctor_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Doctor_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "doctor" */
export type Doctor_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Doctor_Max_Order_By>;
  min?: InputMaybe<Doctor_Min_Order_By>;
};

/** input type for inserting array relation for remote table "doctor" */
export type Doctor_Arr_Rel_Insert_Input = {
  data: Array<Doctor_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Doctor_On_Conflict>;
};

/** Boolean expression to filter rows from the table "doctor". All fields are combined with a logical 'AND'. */
export type Doctor_Bool_Exp = {
  _and?: InputMaybe<Array<Doctor_Bool_Exp>>;
  _not?: InputMaybe<Doctor_Bool_Exp>;
  _or?: InputMaybe<Array<Doctor_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  doctor_opinions?: InputMaybe<Doctor_Opinion_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  forgot_password_token_hash?: InputMaybe<String_Comparison_Exp>;
  hospital?: InputMaybe<Hospital_Bool_Exp>;
  hospital_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  prescriptions?: InputMaybe<Prescription_Bool_Exp>;
  refresh_token_hash?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "doctor" */
export enum Doctor_Constraint {
  /** unique or primary key constraint on columns "email" */
  DoctorEmailKey = 'doctor_email_key',
  /** unique or primary key constraint on columns "id" */
  DoctorPkey = 'doctor_pkey'
}

/** input type for inserting data into table "doctor" */
export type Doctor_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  doctor_opinions?: InputMaybe<Doctor_Opinion_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']>;
  forgot_password_token_hash?: InputMaybe<Scalars['String']>;
  hospital?: InputMaybe<Hospital_Obj_Rel_Insert_Input>;
  hospital_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  prescriptions?: InputMaybe<Prescription_Arr_Rel_Insert_Input>;
  refresh_token_hash?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Doctor_Max_Fields = {
  __typename?: 'doctor_max_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  forgot_password_token_hash?: Maybe<Scalars['String']>;
  hospital_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refresh_token_hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "doctor" */
export type Doctor_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  forgot_password_token_hash?: InputMaybe<Order_By>;
  hospital_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  refresh_token_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Doctor_Min_Fields = {
  __typename?: 'doctor_min_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  forgot_password_token_hash?: Maybe<Scalars['String']>;
  hospital_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refresh_token_hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "doctor" */
export type Doctor_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  forgot_password_token_hash?: InputMaybe<Order_By>;
  hospital_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  refresh_token_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "doctor" */
export type Doctor_Mutation_Response = {
  __typename?: 'doctor_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Doctor>;
};

/** input type for inserting object relation for remote table "doctor" */
export type Doctor_Obj_Rel_Insert_Input = {
  data: Doctor_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Doctor_On_Conflict>;
};

/** on_conflict condition type for table "doctor" */
export type Doctor_On_Conflict = {
  constraint: Doctor_Constraint;
  update_columns?: Array<Doctor_Update_Column>;
  where?: InputMaybe<Doctor_Bool_Exp>;
};

/** columns and relationships of "doctor_opinion" */
export type Doctor_Opinion = {
  __typename?: 'doctor_opinion';
  created_at: Scalars['timestamptz'];
  data: Scalars['json'];
  /** An object relationship */
  doctor: Doctor;
  doctor_id: Scalars['uuid'];
  id: Scalars['uuid'];
  referances?: Maybe<Scalars['json']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "doctor_opinion" */
export type Doctor_OpinionDataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "doctor_opinion" */
export type Doctor_OpinionReferancesArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "doctor_opinion" */
export type Doctor_Opinion_Aggregate = {
  __typename?: 'doctor_opinion_aggregate';
  aggregate?: Maybe<Doctor_Opinion_Aggregate_Fields>;
  nodes: Array<Doctor_Opinion>;
};

/** aggregate fields of "doctor_opinion" */
export type Doctor_Opinion_Aggregate_Fields = {
  __typename?: 'doctor_opinion_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Doctor_Opinion_Max_Fields>;
  min?: Maybe<Doctor_Opinion_Min_Fields>;
};


/** aggregate fields of "doctor_opinion" */
export type Doctor_Opinion_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Doctor_Opinion_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "doctor_opinion" */
export type Doctor_Opinion_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Doctor_Opinion_Max_Order_By>;
  min?: InputMaybe<Doctor_Opinion_Min_Order_By>;
};

/** input type for inserting array relation for remote table "doctor_opinion" */
export type Doctor_Opinion_Arr_Rel_Insert_Input = {
  data: Array<Doctor_Opinion_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Doctor_Opinion_On_Conflict>;
};

/** Boolean expression to filter rows from the table "doctor_opinion". All fields are combined with a logical 'AND'. */
export type Doctor_Opinion_Bool_Exp = {
  _and?: InputMaybe<Array<Doctor_Opinion_Bool_Exp>>;
  _not?: InputMaybe<Doctor_Opinion_Bool_Exp>;
  _or?: InputMaybe<Array<Doctor_Opinion_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Json_Comparison_Exp>;
  doctor?: InputMaybe<Doctor_Bool_Exp>;
  doctor_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  referances?: InputMaybe<Json_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "doctor_opinion" */
export enum Doctor_Opinion_Constraint {
  /** unique or primary key constraint on columns "id" */
  DoctorOpinionPkey = 'doctor_opinion_pkey'
}

/** input type for inserting data into table "doctor_opinion" */
export type Doctor_Opinion_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['json']>;
  doctor?: InputMaybe<Doctor_Obj_Rel_Insert_Input>;
  doctor_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  referances?: InputMaybe<Scalars['json']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Doctor_Opinion_Max_Fields = {
  __typename?: 'doctor_opinion_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  doctor_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "doctor_opinion" */
export type Doctor_Opinion_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Doctor_Opinion_Min_Fields = {
  __typename?: 'doctor_opinion_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  doctor_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "doctor_opinion" */
export type Doctor_Opinion_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "doctor_opinion" */
export type Doctor_Opinion_Mutation_Response = {
  __typename?: 'doctor_opinion_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Doctor_Opinion>;
};

/** on_conflict condition type for table "doctor_opinion" */
export type Doctor_Opinion_On_Conflict = {
  constraint: Doctor_Opinion_Constraint;
  update_columns?: Array<Doctor_Opinion_Update_Column>;
  where?: InputMaybe<Doctor_Opinion_Bool_Exp>;
};

/** Ordering options when selecting data from "doctor_opinion". */
export type Doctor_Opinion_Order_By = {
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  doctor?: InputMaybe<Doctor_Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  referances?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: doctor_opinion */
export type Doctor_Opinion_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "doctor_opinion" */
export enum Doctor_Opinion_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DoctorId = 'doctor_id',
  /** column name */
  Id = 'id',
  /** column name */
  Referances = 'referances',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "doctor_opinion" */
export type Doctor_Opinion_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['json']>;
  doctor_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  referances?: InputMaybe<Scalars['json']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "doctor_opinion" */
export enum Doctor_Opinion_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DoctorId = 'doctor_id',
  /** column name */
  Id = 'id',
  /** column name */
  Referances = 'referances',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** Ordering options when selecting data from "doctor". */
export type Doctor_Order_By = {
  address?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  doctor_opinions_aggregate?: InputMaybe<Doctor_Opinion_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  forgot_password_token_hash?: InputMaybe<Order_By>;
  hospital?: InputMaybe<Hospital_Order_By>;
  hospital_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  prescriptions_aggregate?: InputMaybe<Prescription_Aggregate_Order_By>;
  refresh_token_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: doctor */
export type Doctor_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "doctor" */
export enum Doctor_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  ForgotPasswordTokenHash = 'forgot_password_token_hash',
  /** column name */
  HospitalId = 'hospital_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  RefreshTokenHash = 'refresh_token_hash',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "doctor" */
export type Doctor_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  forgot_password_token_hash?: InputMaybe<Scalars['String']>;
  hospital_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  refresh_token_hash?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "doctor" */
export enum Doctor_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  ForgotPasswordTokenHash = 'forgot_password_token_hash',
  /** column name */
  HospitalId = 'hospital_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  RefreshTokenHash = 'refresh_token_hash',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "hospital" */
export type Hospital = {
  __typename?: 'hospital';
  address: Scalars['String'];
  certificates: Scalars['json'];
  created_at: Scalars['timestamptz'];
  district: Scalars['String'];
  /** An array relationship */
  doctors: Array<Doctor>;
  /** An aggregate relationship */
  doctors_aggregate: Doctor_Aggregate;
  id: Scalars['uuid'];
  name: Scalars['String'];
  pin: Scalars['String'];
  state: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  website: Scalars['String'];
};


/** columns and relationships of "hospital" */
export type HospitalCertificatesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "hospital" */
export type HospitalDoctorsArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Doctor_Order_By>>;
  where?: InputMaybe<Doctor_Bool_Exp>;
};


/** columns and relationships of "hospital" */
export type HospitalDoctors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Doctor_Order_By>>;
  where?: InputMaybe<Doctor_Bool_Exp>;
};

/** aggregated selection of "hospital" */
export type Hospital_Aggregate = {
  __typename?: 'hospital_aggregate';
  aggregate?: Maybe<Hospital_Aggregate_Fields>;
  nodes: Array<Hospital>;
};

/** aggregate fields of "hospital" */
export type Hospital_Aggregate_Fields = {
  __typename?: 'hospital_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Hospital_Max_Fields>;
  min?: Maybe<Hospital_Min_Fields>;
};


/** aggregate fields of "hospital" */
export type Hospital_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hospital_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "hospital". All fields are combined with a logical 'AND'. */
export type Hospital_Bool_Exp = {
  _and?: InputMaybe<Array<Hospital_Bool_Exp>>;
  _not?: InputMaybe<Hospital_Bool_Exp>;
  _or?: InputMaybe<Array<Hospital_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  certificates?: InputMaybe<Json_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  district?: InputMaybe<String_Comparison_Exp>;
  doctors?: InputMaybe<Doctor_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  pin?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "hospital" */
export enum Hospital_Constraint {
  /** unique or primary key constraint on columns "id" */
  HospitalPkey = 'hospital_pkey'
}

/** input type for inserting data into table "hospital" */
export type Hospital_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  certificates?: InputMaybe<Scalars['json']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  district?: InputMaybe<Scalars['String']>;
  doctors?: InputMaybe<Doctor_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  pin?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Hospital_Max_Fields = {
  __typename?: 'hospital_max_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  district?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Hospital_Min_Fields = {
  __typename?: 'hospital_min_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  district?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  website?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "hospital" */
export type Hospital_Mutation_Response = {
  __typename?: 'hospital_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Hospital>;
};

/** input type for inserting object relation for remote table "hospital" */
export type Hospital_Obj_Rel_Insert_Input = {
  data: Hospital_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Hospital_On_Conflict>;
};

/** on_conflict condition type for table "hospital" */
export type Hospital_On_Conflict = {
  constraint: Hospital_Constraint;
  update_columns?: Array<Hospital_Update_Column>;
  where?: InputMaybe<Hospital_Bool_Exp>;
};

/** Ordering options when selecting data from "hospital". */
export type Hospital_Order_By = {
  address?: InputMaybe<Order_By>;
  certificates?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  district?: InputMaybe<Order_By>;
  doctors_aggregate?: InputMaybe<Doctor_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pin?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hospital */
export type Hospital_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "hospital" */
export enum Hospital_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Certificates = 'certificates',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  District = 'district',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Pin = 'pin',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "hospital" */
export type Hospital_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  certificates?: InputMaybe<Scalars['json']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  district?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  pin?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  website?: InputMaybe<Scalars['String']>;
};

/** update columns of table "hospital" */
export enum Hospital_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Certificates = 'certificates',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  District = 'district',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Pin = 'pin',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Website = 'website'
}

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']>;
  _gt?: InputMaybe<Scalars['json']>;
  _gte?: InputMaybe<Scalars['json']>;
  _in?: InputMaybe<Array<Scalars['json']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['json']>;
  _lte?: InputMaybe<Scalars['json']>;
  _neq?: InputMaybe<Scalars['json']>;
  _nin?: InputMaybe<Array<Scalars['json']>>;
};

/** columns and relationships of "lab_technician" */
export type Lab_Technician = {
  __typename?: 'lab_technician';
  certificates: Scalars['json'];
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  forgot_password_token_hash?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  lab: Labs;
  lab_id: Scalars['uuid'];
  name: Scalars['String'];
  password: Scalars['String'];
  refresh_token_hash?: Maybe<Scalars['String']>;
  /** An array relationship */
  reports: Array<Report>;
  /** An aggregate relationship */
  reports_aggregate: Report_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "lab_technician" */
export type Lab_TechnicianCertificatesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "lab_technician" */
export type Lab_TechnicianReportsArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


/** columns and relationships of "lab_technician" */
export type Lab_TechnicianReports_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};

/** aggregated selection of "lab_technician" */
export type Lab_Technician_Aggregate = {
  __typename?: 'lab_technician_aggregate';
  aggregate?: Maybe<Lab_Technician_Aggregate_Fields>;
  nodes: Array<Lab_Technician>;
};

/** aggregate fields of "lab_technician" */
export type Lab_Technician_Aggregate_Fields = {
  __typename?: 'lab_technician_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Lab_Technician_Max_Fields>;
  min?: Maybe<Lab_Technician_Min_Fields>;
};


/** aggregate fields of "lab_technician" */
export type Lab_Technician_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Lab_Technician_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "lab_technician" */
export type Lab_Technician_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Lab_Technician_Max_Order_By>;
  min?: InputMaybe<Lab_Technician_Min_Order_By>;
};

/** input type for inserting array relation for remote table "lab_technician" */
export type Lab_Technician_Arr_Rel_Insert_Input = {
  data: Array<Lab_Technician_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Lab_Technician_On_Conflict>;
};

/** Boolean expression to filter rows from the table "lab_technician". All fields are combined with a logical 'AND'. */
export type Lab_Technician_Bool_Exp = {
  _and?: InputMaybe<Array<Lab_Technician_Bool_Exp>>;
  _not?: InputMaybe<Lab_Technician_Bool_Exp>;
  _or?: InputMaybe<Array<Lab_Technician_Bool_Exp>>;
  certificates?: InputMaybe<Json_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  forgot_password_token_hash?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lab?: InputMaybe<Labs_Bool_Exp>;
  lab_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  refresh_token_hash?: InputMaybe<String_Comparison_Exp>;
  reports?: InputMaybe<Report_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "lab_technician" */
export enum Lab_Technician_Constraint {
  /** unique or primary key constraint on columns "email" */
  LabTechnicianEmailKey = 'lab_technician_email_key',
  /** unique or primary key constraint on columns "id" */
  LabTechnicianPkey = 'lab_technician_pkey'
}

/** input type for inserting data into table "lab_technician" */
export type Lab_Technician_Insert_Input = {
  certificates?: InputMaybe<Scalars['json']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  forgot_password_token_hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lab?: InputMaybe<Labs_Obj_Rel_Insert_Input>;
  lab_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  refresh_token_hash?: InputMaybe<Scalars['String']>;
  reports?: InputMaybe<Report_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Lab_Technician_Max_Fields = {
  __typename?: 'lab_technician_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  forgot_password_token_hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lab_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refresh_token_hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "lab_technician" */
export type Lab_Technician_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  forgot_password_token_hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lab_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  refresh_token_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Lab_Technician_Min_Fields = {
  __typename?: 'lab_technician_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  forgot_password_token_hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lab_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refresh_token_hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "lab_technician" */
export type Lab_Technician_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  forgot_password_token_hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lab_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  refresh_token_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "lab_technician" */
export type Lab_Technician_Mutation_Response = {
  __typename?: 'lab_technician_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Lab_Technician>;
};

/** input type for inserting object relation for remote table "lab_technician" */
export type Lab_Technician_Obj_Rel_Insert_Input = {
  data: Lab_Technician_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Lab_Technician_On_Conflict>;
};

/** on_conflict condition type for table "lab_technician" */
export type Lab_Technician_On_Conflict = {
  constraint: Lab_Technician_Constraint;
  update_columns?: Array<Lab_Technician_Update_Column>;
  where?: InputMaybe<Lab_Technician_Bool_Exp>;
};

/** Ordering options when selecting data from "lab_technician". */
export type Lab_Technician_Order_By = {
  certificates?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  forgot_password_token_hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lab?: InputMaybe<Labs_Order_By>;
  lab_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  refresh_token_hash?: InputMaybe<Order_By>;
  reports_aggregate?: InputMaybe<Report_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: lab_technician */
export type Lab_Technician_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "lab_technician" */
export enum Lab_Technician_Select_Column {
  /** column name */
  Certificates = 'certificates',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  ForgotPasswordTokenHash = 'forgot_password_token_hash',
  /** column name */
  Id = 'id',
  /** column name */
  LabId = 'lab_id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  RefreshTokenHash = 'refresh_token_hash',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "lab_technician" */
export type Lab_Technician_Set_Input = {
  certificates?: InputMaybe<Scalars['json']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  forgot_password_token_hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lab_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  refresh_token_hash?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "lab_technician" */
export enum Lab_Technician_Update_Column {
  /** column name */
  Certificates = 'certificates',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  ForgotPasswordTokenHash = 'forgot_password_token_hash',
  /** column name */
  Id = 'id',
  /** column name */
  LabId = 'lab_id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  RefreshTokenHash = 'refresh_token_hash',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "labs" */
export type Labs = {
  __typename?: 'labs';
  address: Scalars['String'];
  certificates: Scalars['json'];
  created_at: Scalars['timestamptz'];
  district: Scalars['String'];
  id: Scalars['uuid'];
  /** An array relationship */
  lab_technician: Array<Lab_Technician>;
  /** An aggregate relationship */
  lab_technician_aggregate: Lab_Technician_Aggregate;
  name: Scalars['String'];
  pin: Scalars['String'];
  state: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "labs" */
export type LabsCertificatesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "labs" */
export type LabsLab_TechnicianArgs = {
  distinct_on?: InputMaybe<Array<Lab_Technician_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Lab_Technician_Order_By>>;
  where?: InputMaybe<Lab_Technician_Bool_Exp>;
};


/** columns and relationships of "labs" */
export type LabsLab_Technician_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lab_Technician_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Lab_Technician_Order_By>>;
  where?: InputMaybe<Lab_Technician_Bool_Exp>;
};

/** aggregated selection of "labs" */
export type Labs_Aggregate = {
  __typename?: 'labs_aggregate';
  aggregate?: Maybe<Labs_Aggregate_Fields>;
  nodes: Array<Labs>;
};

/** aggregate fields of "labs" */
export type Labs_Aggregate_Fields = {
  __typename?: 'labs_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Labs_Max_Fields>;
  min?: Maybe<Labs_Min_Fields>;
};


/** aggregate fields of "labs" */
export type Labs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Labs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "labs". All fields are combined with a logical 'AND'. */
export type Labs_Bool_Exp = {
  _and?: InputMaybe<Array<Labs_Bool_Exp>>;
  _not?: InputMaybe<Labs_Bool_Exp>;
  _or?: InputMaybe<Array<Labs_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  certificates?: InputMaybe<Json_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  district?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lab_technician?: InputMaybe<Lab_Technician_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  pin?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "labs" */
export enum Labs_Constraint {
  /** unique or primary key constraint on columns "id" */
  LabsPkey = 'labs_pkey'
}

/** input type for inserting data into table "labs" */
export type Labs_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  certificates?: InputMaybe<Scalars['json']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  district?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lab_technician?: InputMaybe<Lab_Technician_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  pin?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Labs_Max_Fields = {
  __typename?: 'labs_max_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  district?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Labs_Min_Fields = {
  __typename?: 'labs_min_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  district?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "labs" */
export type Labs_Mutation_Response = {
  __typename?: 'labs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Labs>;
};

/** input type for inserting object relation for remote table "labs" */
export type Labs_Obj_Rel_Insert_Input = {
  data: Labs_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Labs_On_Conflict>;
};

/** on_conflict condition type for table "labs" */
export type Labs_On_Conflict = {
  constraint: Labs_Constraint;
  update_columns?: Array<Labs_Update_Column>;
  where?: InputMaybe<Labs_Bool_Exp>;
};

/** Ordering options when selecting data from "labs". */
export type Labs_Order_By = {
  address?: InputMaybe<Order_By>;
  certificates?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  district?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lab_technician_aggregate?: InputMaybe<Lab_Technician_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  pin?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: labs */
export type Labs_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "labs" */
export enum Labs_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Certificates = 'certificates',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  District = 'district',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Pin = 'pin',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "labs" */
export type Labs_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  certificates?: InputMaybe<Scalars['json']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  district?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  pin?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "labs" */
export enum Labs_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Certificates = 'certificates',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  District = 'district',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Pin = 'pin',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "doctor" */
  delete_doctor?: Maybe<Doctor_Mutation_Response>;
  /** delete single row from the table: "doctor" */
  delete_doctor_by_pk?: Maybe<Doctor>;
  /** delete data from the table: "doctor_opinion" */
  delete_doctor_opinion?: Maybe<Doctor_Opinion_Mutation_Response>;
  /** delete single row from the table: "doctor_opinion" */
  delete_doctor_opinion_by_pk?: Maybe<Doctor_Opinion>;
  /** delete data from the table: "hospital" */
  delete_hospital?: Maybe<Hospital_Mutation_Response>;
  /** delete single row from the table: "hospital" */
  delete_hospital_by_pk?: Maybe<Hospital>;
  /** delete data from the table: "lab_technician" */
  delete_lab_technician?: Maybe<Lab_Technician_Mutation_Response>;
  /** delete single row from the table: "lab_technician" */
  delete_lab_technician_by_pk?: Maybe<Lab_Technician>;
  /** delete data from the table: "labs" */
  delete_labs?: Maybe<Labs_Mutation_Response>;
  /** delete single row from the table: "labs" */
  delete_labs_by_pk?: Maybe<Labs>;
  /** delete data from the table: "prescription" */
  delete_prescription?: Maybe<Prescription_Mutation_Response>;
  /** delete single row from the table: "prescription" */
  delete_prescription_by_pk?: Maybe<Prescription>;
  /** delete data from the table: "report" */
  delete_report?: Maybe<Report_Mutation_Response>;
  /** delete single row from the table: "report" */
  delete_report_by_pk?: Maybe<Report>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "doctor" */
  insert_doctor?: Maybe<Doctor_Mutation_Response>;
  /** insert a single row into the table: "doctor" */
  insert_doctor_one?: Maybe<Doctor>;
  /** insert data into the table: "doctor_opinion" */
  insert_doctor_opinion?: Maybe<Doctor_Opinion_Mutation_Response>;
  /** insert a single row into the table: "doctor_opinion" */
  insert_doctor_opinion_one?: Maybe<Doctor_Opinion>;
  /** insert data into the table: "hospital" */
  insert_hospital?: Maybe<Hospital_Mutation_Response>;
  /** insert a single row into the table: "hospital" */
  insert_hospital_one?: Maybe<Hospital>;
  /** insert data into the table: "lab_technician" */
  insert_lab_technician?: Maybe<Lab_Technician_Mutation_Response>;
  /** insert a single row into the table: "lab_technician" */
  insert_lab_technician_one?: Maybe<Lab_Technician>;
  /** insert data into the table: "labs" */
  insert_labs?: Maybe<Labs_Mutation_Response>;
  /** insert a single row into the table: "labs" */
  insert_labs_one?: Maybe<Labs>;
  /** insert data into the table: "prescription" */
  insert_prescription?: Maybe<Prescription_Mutation_Response>;
  /** insert a single row into the table: "prescription" */
  insert_prescription_one?: Maybe<Prescription>;
  /** insert data into the table: "report" */
  insert_report?: Maybe<Report_Mutation_Response>;
  /** insert a single row into the table: "report" */
  insert_report_one?: Maybe<Report>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "doctor" */
  update_doctor?: Maybe<Doctor_Mutation_Response>;
  /** update single row of the table: "doctor" */
  update_doctor_by_pk?: Maybe<Doctor>;
  /** update data of the table: "doctor_opinion" */
  update_doctor_opinion?: Maybe<Doctor_Opinion_Mutation_Response>;
  /** update single row of the table: "doctor_opinion" */
  update_doctor_opinion_by_pk?: Maybe<Doctor_Opinion>;
  /** update data of the table: "hospital" */
  update_hospital?: Maybe<Hospital_Mutation_Response>;
  /** update single row of the table: "hospital" */
  update_hospital_by_pk?: Maybe<Hospital>;
  /** update data of the table: "lab_technician" */
  update_lab_technician?: Maybe<Lab_Technician_Mutation_Response>;
  /** update single row of the table: "lab_technician" */
  update_lab_technician_by_pk?: Maybe<Lab_Technician>;
  /** update data of the table: "labs" */
  update_labs?: Maybe<Labs_Mutation_Response>;
  /** update single row of the table: "labs" */
  update_labs_by_pk?: Maybe<Labs>;
  /** update data of the table: "prescription" */
  update_prescription?: Maybe<Prescription_Mutation_Response>;
  /** update single row of the table: "prescription" */
  update_prescription_by_pk?: Maybe<Prescription>;
  /** update data of the table: "report" */
  update_report?: Maybe<Report_Mutation_Response>;
  /** update single row of the table: "report" */
  update_report_by_pk?: Maybe<Report>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_DoctorArgs = {
  where: Doctor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Doctor_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Doctor_OpinionArgs = {
  where: Doctor_Opinion_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Doctor_Opinion_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_HospitalArgs = {
  where: Hospital_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hospital_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Lab_TechnicianArgs = {
  where: Lab_Technician_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Lab_Technician_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_LabsArgs = {
  where: Labs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Labs_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PrescriptionArgs = {
  where: Prescription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Prescription_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ReportArgs = {
  where: Report_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Report_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_DoctorArgs = {
  objects: Array<Doctor_Insert_Input>;
  on_conflict?: InputMaybe<Doctor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Doctor_OneArgs = {
  object: Doctor_Insert_Input;
  on_conflict?: InputMaybe<Doctor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Doctor_OpinionArgs = {
  objects: Array<Doctor_Opinion_Insert_Input>;
  on_conflict?: InputMaybe<Doctor_Opinion_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Doctor_Opinion_OneArgs = {
  object: Doctor_Opinion_Insert_Input;
  on_conflict?: InputMaybe<Doctor_Opinion_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HospitalArgs = {
  objects: Array<Hospital_Insert_Input>;
  on_conflict?: InputMaybe<Hospital_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hospital_OneArgs = {
  object: Hospital_Insert_Input;
  on_conflict?: InputMaybe<Hospital_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lab_TechnicianArgs = {
  objects: Array<Lab_Technician_Insert_Input>;
  on_conflict?: InputMaybe<Lab_Technician_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lab_Technician_OneArgs = {
  object: Lab_Technician_Insert_Input;
  on_conflict?: InputMaybe<Lab_Technician_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LabsArgs = {
  objects: Array<Labs_Insert_Input>;
  on_conflict?: InputMaybe<Labs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Labs_OneArgs = {
  object: Labs_Insert_Input;
  on_conflict?: InputMaybe<Labs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PrescriptionArgs = {
  objects: Array<Prescription_Insert_Input>;
  on_conflict?: InputMaybe<Prescription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Prescription_OneArgs = {
  object: Prescription_Insert_Input;
  on_conflict?: InputMaybe<Prescription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReportArgs = {
  objects: Array<Report_Insert_Input>;
  on_conflict?: InputMaybe<Report_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Report_OneArgs = {
  object: Report_Insert_Input;
  on_conflict?: InputMaybe<Report_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_DoctorArgs = {
  _set?: InputMaybe<Doctor_Set_Input>;
  where: Doctor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Doctor_By_PkArgs = {
  _set?: InputMaybe<Doctor_Set_Input>;
  pk_columns: Doctor_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Doctor_OpinionArgs = {
  _set?: InputMaybe<Doctor_Opinion_Set_Input>;
  where: Doctor_Opinion_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Doctor_Opinion_By_PkArgs = {
  _set?: InputMaybe<Doctor_Opinion_Set_Input>;
  pk_columns: Doctor_Opinion_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_HospitalArgs = {
  _set?: InputMaybe<Hospital_Set_Input>;
  where: Hospital_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hospital_By_PkArgs = {
  _set?: InputMaybe<Hospital_Set_Input>;
  pk_columns: Hospital_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Lab_TechnicianArgs = {
  _set?: InputMaybe<Lab_Technician_Set_Input>;
  where: Lab_Technician_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Lab_Technician_By_PkArgs = {
  _set?: InputMaybe<Lab_Technician_Set_Input>;
  pk_columns: Lab_Technician_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LabsArgs = {
  _set?: InputMaybe<Labs_Set_Input>;
  where: Labs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Labs_By_PkArgs = {
  _set?: InputMaybe<Labs_Set_Input>;
  pk_columns: Labs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PrescriptionArgs = {
  _set?: InputMaybe<Prescription_Set_Input>;
  where: Prescription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Prescription_By_PkArgs = {
  _set?: InputMaybe<Prescription_Set_Input>;
  pk_columns: Prescription_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ReportArgs = {
  _set?: InputMaybe<Report_Set_Input>;
  where: Report_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Report_By_PkArgs = {
  _set?: InputMaybe<Report_Set_Input>;
  pk_columns: Report_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "prescription" */
export type Prescription = {
  __typename?: 'prescription';
  created_at: Scalars['timestamptz'];
  data: Scalars['json'];
  /** An object relationship */
  doctor: Doctor;
  doctor_id: Scalars['uuid'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "prescription" */
export type PrescriptionDataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "prescription" */
export type Prescription_Aggregate = {
  __typename?: 'prescription_aggregate';
  aggregate?: Maybe<Prescription_Aggregate_Fields>;
  nodes: Array<Prescription>;
};

/** aggregate fields of "prescription" */
export type Prescription_Aggregate_Fields = {
  __typename?: 'prescription_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Prescription_Max_Fields>;
  min?: Maybe<Prescription_Min_Fields>;
};


/** aggregate fields of "prescription" */
export type Prescription_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Prescription_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "prescription" */
export type Prescription_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Prescription_Max_Order_By>;
  min?: InputMaybe<Prescription_Min_Order_By>;
};

/** input type for inserting array relation for remote table "prescription" */
export type Prescription_Arr_Rel_Insert_Input = {
  data: Array<Prescription_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Prescription_On_Conflict>;
};

/** Boolean expression to filter rows from the table "prescription". All fields are combined with a logical 'AND'. */
export type Prescription_Bool_Exp = {
  _and?: InputMaybe<Array<Prescription_Bool_Exp>>;
  _not?: InputMaybe<Prescription_Bool_Exp>;
  _or?: InputMaybe<Array<Prescription_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Json_Comparison_Exp>;
  doctor?: InputMaybe<Doctor_Bool_Exp>;
  doctor_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "prescription" */
export enum Prescription_Constraint {
  /** unique or primary key constraint on columns "id" */
  PrescriptionPkey = 'prescription_pkey'
}

/** input type for inserting data into table "prescription" */
export type Prescription_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['json']>;
  doctor?: InputMaybe<Doctor_Obj_Rel_Insert_Input>;
  doctor_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Prescription_Max_Fields = {
  __typename?: 'prescription_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  doctor_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "prescription" */
export type Prescription_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Prescription_Min_Fields = {
  __typename?: 'prescription_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  doctor_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "prescription" */
export type Prescription_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "prescription" */
export type Prescription_Mutation_Response = {
  __typename?: 'prescription_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Prescription>;
};

/** on_conflict condition type for table "prescription" */
export type Prescription_On_Conflict = {
  constraint: Prescription_Constraint;
  update_columns?: Array<Prescription_Update_Column>;
  where?: InputMaybe<Prescription_Bool_Exp>;
};

/** Ordering options when selecting data from "prescription". */
export type Prescription_Order_By = {
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  doctor?: InputMaybe<Doctor_Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: prescription */
export type Prescription_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "prescription" */
export enum Prescription_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DoctorId = 'doctor_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "prescription" */
export type Prescription_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['json']>;
  doctor_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "prescription" */
export enum Prescription_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DoctorId = 'doctor_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "doctor" */
  doctor: Array<Doctor>;
  /** fetch aggregated fields from the table: "doctor" */
  doctor_aggregate: Doctor_Aggregate;
  /** fetch data from the table: "doctor" using primary key columns */
  doctor_by_pk?: Maybe<Doctor>;
  /** fetch data from the table: "doctor_opinion" */
  doctor_opinion: Array<Doctor_Opinion>;
  /** fetch aggregated fields from the table: "doctor_opinion" */
  doctor_opinion_aggregate: Doctor_Opinion_Aggregate;
  /** fetch data from the table: "doctor_opinion" using primary key columns */
  doctor_opinion_by_pk?: Maybe<Doctor_Opinion>;
  /** fetch data from the table: "hospital" */
  hospital: Array<Hospital>;
  /** fetch aggregated fields from the table: "hospital" */
  hospital_aggregate: Hospital_Aggregate;
  /** fetch data from the table: "hospital" using primary key columns */
  hospital_by_pk?: Maybe<Hospital>;
  /** An array relationship */
  lab_technician: Array<Lab_Technician>;
  /** An aggregate relationship */
  lab_technician_aggregate: Lab_Technician_Aggregate;
  /** fetch data from the table: "lab_technician" using primary key columns */
  lab_technician_by_pk?: Maybe<Lab_Technician>;
  /** fetch data from the table: "labs" */
  labs: Array<Labs>;
  /** fetch aggregated fields from the table: "labs" */
  labs_aggregate: Labs_Aggregate;
  /** fetch data from the table: "labs" using primary key columns */
  labs_by_pk?: Maybe<Labs>;
  /** fetch data from the table: "prescription" */
  prescription: Array<Prescription>;
  /** fetch aggregated fields from the table: "prescription" */
  prescription_aggregate: Prescription_Aggregate;
  /** fetch data from the table: "prescription" using primary key columns */
  prescription_by_pk?: Maybe<Prescription>;
  /** fetch data from the table: "report" */
  report: Array<Report>;
  /** fetch aggregated fields from the table: "report" */
  report_aggregate: Report_Aggregate;
  /** fetch data from the table: "report" using primary key columns */
  report_by_pk?: Maybe<Report>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootDoctorArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Doctor_Order_By>>;
  where?: InputMaybe<Doctor_Bool_Exp>;
};


export type Query_RootDoctor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Doctor_Order_By>>;
  where?: InputMaybe<Doctor_Bool_Exp>;
};


export type Query_RootDoctor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDoctor_OpinionArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Opinion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Doctor_Opinion_Order_By>>;
  where?: InputMaybe<Doctor_Opinion_Bool_Exp>;
};


export type Query_RootDoctor_Opinion_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Opinion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Doctor_Opinion_Order_By>>;
  where?: InputMaybe<Doctor_Opinion_Bool_Exp>;
};


export type Query_RootDoctor_Opinion_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootHospitalArgs = {
  distinct_on?: InputMaybe<Array<Hospital_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hospital_Order_By>>;
  where?: InputMaybe<Hospital_Bool_Exp>;
};


export type Query_RootHospital_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hospital_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hospital_Order_By>>;
  where?: InputMaybe<Hospital_Bool_Exp>;
};


export type Query_RootHospital_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootLab_TechnicianArgs = {
  distinct_on?: InputMaybe<Array<Lab_Technician_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Lab_Technician_Order_By>>;
  where?: InputMaybe<Lab_Technician_Bool_Exp>;
};


export type Query_RootLab_Technician_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lab_Technician_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Lab_Technician_Order_By>>;
  where?: InputMaybe<Lab_Technician_Bool_Exp>;
};


export type Query_RootLab_Technician_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootLabsArgs = {
  distinct_on?: InputMaybe<Array<Labs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Labs_Order_By>>;
  where?: InputMaybe<Labs_Bool_Exp>;
};


export type Query_RootLabs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Labs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Labs_Order_By>>;
  where?: InputMaybe<Labs_Bool_Exp>;
};


export type Query_RootLabs_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPrescriptionArgs = {
  distinct_on?: InputMaybe<Array<Prescription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prescription_Order_By>>;
  where?: InputMaybe<Prescription_Bool_Exp>;
};


export type Query_RootPrescription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prescription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prescription_Order_By>>;
  where?: InputMaybe<Prescription_Bool_Exp>;
};


export type Query_RootPrescription_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootReportArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


export type Query_RootReport_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


export type Query_RootReport_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "report" */
export type Report = {
  __typename?: 'report';
  created_at: Scalars['timestamptz'];
  data: Scalars['json'];
  id: Scalars['uuid'];
  /** An object relationship */
  lab_technician: Lab_Technician;
  lab_technician_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "report" */
export type ReportDataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "report" */
export type Report_Aggregate = {
  __typename?: 'report_aggregate';
  aggregate?: Maybe<Report_Aggregate_Fields>;
  nodes: Array<Report>;
};

/** aggregate fields of "report" */
export type Report_Aggregate_Fields = {
  __typename?: 'report_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Report_Max_Fields>;
  min?: Maybe<Report_Min_Fields>;
};


/** aggregate fields of "report" */
export type Report_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Report_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "report" */
export type Report_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Report_Max_Order_By>;
  min?: InputMaybe<Report_Min_Order_By>;
};

/** input type for inserting array relation for remote table "report" */
export type Report_Arr_Rel_Insert_Input = {
  data: Array<Report_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Report_On_Conflict>;
};

/** Boolean expression to filter rows from the table "report". All fields are combined with a logical 'AND'. */
export type Report_Bool_Exp = {
  _and?: InputMaybe<Array<Report_Bool_Exp>>;
  _not?: InputMaybe<Report_Bool_Exp>;
  _or?: InputMaybe<Array<Report_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Json_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lab_technician?: InputMaybe<Lab_Technician_Bool_Exp>;
  lab_technician_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "report" */
export enum Report_Constraint {
  /** unique or primary key constraint on columns "id" */
  MedicalTechnologistPkey = 'medical_technologist_pkey'
}

/** input type for inserting data into table "report" */
export type Report_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['json']>;
  id?: InputMaybe<Scalars['uuid']>;
  lab_technician?: InputMaybe<Lab_Technician_Obj_Rel_Insert_Input>;
  lab_technician_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Report_Max_Fields = {
  __typename?: 'report_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lab_technician_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "report" */
export type Report_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lab_technician_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Report_Min_Fields = {
  __typename?: 'report_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lab_technician_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "report" */
export type Report_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lab_technician_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "report" */
export type Report_Mutation_Response = {
  __typename?: 'report_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Report>;
};

/** on_conflict condition type for table "report" */
export type Report_On_Conflict = {
  constraint: Report_Constraint;
  update_columns?: Array<Report_Update_Column>;
  where?: InputMaybe<Report_Bool_Exp>;
};

/** Ordering options when selecting data from "report". */
export type Report_Order_By = {
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lab_technician?: InputMaybe<Lab_Technician_Order_By>;
  lab_technician_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: report */
export type Report_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "report" */
export enum Report_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  LabTechnicianId = 'lab_technician_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "report" */
export type Report_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['json']>;
  id?: InputMaybe<Scalars['uuid']>;
  lab_technician_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "report" */
export enum Report_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  LabTechnicianId = 'lab_technician_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "doctor" */
  doctor: Array<Doctor>;
  /** fetch aggregated fields from the table: "doctor" */
  doctor_aggregate: Doctor_Aggregate;
  /** fetch data from the table: "doctor" using primary key columns */
  doctor_by_pk?: Maybe<Doctor>;
  /** fetch data from the table: "doctor_opinion" */
  doctor_opinion: Array<Doctor_Opinion>;
  /** fetch aggregated fields from the table: "doctor_opinion" */
  doctor_opinion_aggregate: Doctor_Opinion_Aggregate;
  /** fetch data from the table: "doctor_opinion" using primary key columns */
  doctor_opinion_by_pk?: Maybe<Doctor_Opinion>;
  /** fetch data from the table: "hospital" */
  hospital: Array<Hospital>;
  /** fetch aggregated fields from the table: "hospital" */
  hospital_aggregate: Hospital_Aggregate;
  /** fetch data from the table: "hospital" using primary key columns */
  hospital_by_pk?: Maybe<Hospital>;
  /** An array relationship */
  lab_technician: Array<Lab_Technician>;
  /** An aggregate relationship */
  lab_technician_aggregate: Lab_Technician_Aggregate;
  /** fetch data from the table: "lab_technician" using primary key columns */
  lab_technician_by_pk?: Maybe<Lab_Technician>;
  /** fetch data from the table: "labs" */
  labs: Array<Labs>;
  /** fetch aggregated fields from the table: "labs" */
  labs_aggregate: Labs_Aggregate;
  /** fetch data from the table: "labs" using primary key columns */
  labs_by_pk?: Maybe<Labs>;
  /** fetch data from the table: "prescription" */
  prescription: Array<Prescription>;
  /** fetch aggregated fields from the table: "prescription" */
  prescription_aggregate: Prescription_Aggregate;
  /** fetch data from the table: "prescription" using primary key columns */
  prescription_by_pk?: Maybe<Prescription>;
  /** fetch data from the table: "report" */
  report: Array<Report>;
  /** fetch aggregated fields from the table: "report" */
  report_aggregate: Report_Aggregate;
  /** fetch data from the table: "report" using primary key columns */
  report_by_pk?: Maybe<Report>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootDoctorArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Doctor_Order_By>>;
  where?: InputMaybe<Doctor_Bool_Exp>;
};


export type Subscription_RootDoctor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Doctor_Order_By>>;
  where?: InputMaybe<Doctor_Bool_Exp>;
};


export type Subscription_RootDoctor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDoctor_OpinionArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Opinion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Doctor_Opinion_Order_By>>;
  where?: InputMaybe<Doctor_Opinion_Bool_Exp>;
};


export type Subscription_RootDoctor_Opinion_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Opinion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Doctor_Opinion_Order_By>>;
  where?: InputMaybe<Doctor_Opinion_Bool_Exp>;
};


export type Subscription_RootDoctor_Opinion_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootHospitalArgs = {
  distinct_on?: InputMaybe<Array<Hospital_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hospital_Order_By>>;
  where?: InputMaybe<Hospital_Bool_Exp>;
};


export type Subscription_RootHospital_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hospital_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hospital_Order_By>>;
  where?: InputMaybe<Hospital_Bool_Exp>;
};


export type Subscription_RootHospital_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLab_TechnicianArgs = {
  distinct_on?: InputMaybe<Array<Lab_Technician_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Lab_Technician_Order_By>>;
  where?: InputMaybe<Lab_Technician_Bool_Exp>;
};


export type Subscription_RootLab_Technician_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lab_Technician_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Lab_Technician_Order_By>>;
  where?: InputMaybe<Lab_Technician_Bool_Exp>;
};


export type Subscription_RootLab_Technician_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLabsArgs = {
  distinct_on?: InputMaybe<Array<Labs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Labs_Order_By>>;
  where?: InputMaybe<Labs_Bool_Exp>;
};


export type Subscription_RootLabs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Labs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Labs_Order_By>>;
  where?: InputMaybe<Labs_Bool_Exp>;
};


export type Subscription_RootLabs_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPrescriptionArgs = {
  distinct_on?: InputMaybe<Array<Prescription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prescription_Order_By>>;
  where?: InputMaybe<Prescription_Bool_Exp>;
};


export type Subscription_RootPrescription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prescription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prescription_Order_By>>;
  where?: InputMaybe<Prescription_Bool_Exp>;
};


export type Subscription_RootPrescription_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootReportArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


export type Subscription_RootReport_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


export type Subscription_RootReport_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  aadhar: Scalars['Int'];
  birth: Scalars['date'];
  blocked: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  doctor_opinions: Array<Doctor_Opinion>;
  /** An aggregate relationship */
  doctor_opinions_aggregate: Doctor_Opinion_Aggregate;
  email: Scalars['String'];
  email_verified: Scalars['Boolean'];
  forgot_password_token_hash?: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  id: Scalars['uuid'];
  /** An array relationship */
  medical_technologists: Array<Report>;
  /** An aggregate relationship */
  medical_technologists_aggregate: Report_Aggregate;
  name: Scalars['String'];
  nationality: Scalars['String'];
  pan: Scalars['String'];
  password: Scalars['String'];
  /** An array relationship */
  prescriptions: Array<Prescription>;
  /** An aggregate relationship */
  prescriptions_aggregate: Prescription_Aggregate;
  profile: Scalars['json'];
  refresh_token_hash?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  weight: Scalars['Int'];
};


/** columns and relationships of "user" */
export type UserDoctor_OpinionsArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Opinion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Doctor_Opinion_Order_By>>;
  where?: InputMaybe<Doctor_Opinion_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserDoctor_Opinions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Opinion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Doctor_Opinion_Order_By>>;
  where?: InputMaybe<Doctor_Opinion_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserMedical_TechnologistsArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserMedical_Technologists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserPrescriptionsArgs = {
  distinct_on?: InputMaybe<Array<Prescription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prescription_Order_By>>;
  where?: InputMaybe<Prescription_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserPrescriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prescription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prescription_Order_By>>;
  where?: InputMaybe<Prescription_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserProfileArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  aadhar?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  aadhar?: InputMaybe<Int_Comparison_Exp>;
  birth?: InputMaybe<Date_Comparison_Exp>;
  blocked?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  doctor_opinions?: InputMaybe<Doctor_Opinion_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_verified?: InputMaybe<Boolean_Comparison_Exp>;
  forgot_password_token_hash?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  medical_technologists?: InputMaybe<Report_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nationality?: InputMaybe<String_Comparison_Exp>;
  pan?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  prescriptions?: InputMaybe<Prescription_Bool_Exp>;
  profile?: InputMaybe<Json_Comparison_Exp>;
  refresh_token_hash?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  weight?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "aadhar" */
  UserAadharKey = 'user_aadhar_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  aadhar?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  aadhar?: InputMaybe<Scalars['Int']>;
  birth?: InputMaybe<Scalars['date']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  doctor_opinions?: InputMaybe<Doctor_Opinion_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  forgot_password_token_hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  medical_technologists?: InputMaybe<Report_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  pan?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  prescriptions?: InputMaybe<Prescription_Arr_Rel_Insert_Input>;
  profile?: InputMaybe<Scalars['json']>;
  refresh_token_hash?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  weight?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  aadhar?: Maybe<Scalars['Int']>;
  birth?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  forgot_password_token_hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  pan?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refresh_token_hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  aadhar?: Maybe<Scalars['Int']>;
  birth?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  forgot_password_token_hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  pan?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refresh_token_hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  aadhar?: InputMaybe<Order_By>;
  birth?: InputMaybe<Order_By>;
  blocked?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  doctor_opinions_aggregate?: InputMaybe<Doctor_Opinion_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  forgot_password_token_hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  medical_technologists_aggregate?: InputMaybe<Report_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  nationality?: InputMaybe<Order_By>;
  pan?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  prescriptions_aggregate?: InputMaybe<Prescription_Aggregate_Order_By>;
  profile?: InputMaybe<Order_By>;
  refresh_token_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Aadhar = 'aadhar',
  /** column name */
  Birth = 'birth',
  /** column name */
  Blocked = 'blocked',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  ForgotPasswordTokenHash = 'forgot_password_token_hash',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Nationality = 'nationality',
  /** column name */
  Pan = 'pan',
  /** column name */
  Password = 'password',
  /** column name */
  Profile = 'profile',
  /** column name */
  RefreshTokenHash = 'refresh_token_hash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  aadhar?: InputMaybe<Scalars['Int']>;
  birth?: InputMaybe<Scalars['date']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  forgot_password_token_hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  pan?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['json']>;
  refresh_token_hash?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  weight?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  aadhar?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  aadhar?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  aadhar?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  aadhar?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Aadhar = 'aadhar',
  /** column name */
  Birth = 'birth',
  /** column name */
  Blocked = 'blocked',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  ForgotPasswordTokenHash = 'forgot_password_token_hash',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Nationality = 'nationality',
  /** column name */
  Pan = 'pan',
  /** column name */
  Password = 'password',
  /** column name */
  Profile = 'profile',
  /** column name */
  RefreshTokenHash = 'refresh_token_hash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Weight = 'weight'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  aadhar?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  aadhar?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  aadhar?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type AddPrescriptionMutationVariables = Exact<{
  data: Prescription_Insert_Input;
}>;


export type AddPrescriptionMutation = { __typename?: 'mutation_root', insert_prescription_one?: { __typename?: 'prescription', id: any } | null };

export type GetPrescriptionCountSubscriptionVariables = Exact<{
  where?: InputMaybe<Prescription_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prescription_Order_By> | Prescription_Order_By>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetPrescriptionCountSubscription = { __typename?: 'subscription_root', prescription_aggregate: { __typename?: 'prescription_aggregate', aggregate?: { __typename?: 'prescription_aggregate_fields', count: number } | null } };

export type GetPrescriptionsSubscriptionVariables = Exact<{
  where?: InputMaybe<Prescription_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prescription_Order_By> | Prescription_Order_By>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetPrescriptionsSubscription = { __typename?: 'subscription_root', prescription: Array<{ __typename?: 'prescription', created_at: any, id: any, data: any, doctor_id: any, user_id: any, doctor: { __typename?: 'doctor', name: string, hospital: { __typename?: 'hospital', name: string, address: string, certificates: any, pin: string } }, user: { __typename?: 'user', name: string } }> };

export type GetOnePrescriptionQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetOnePrescriptionQuery = { __typename?: 'query_root', prescription_by_pk?: { __typename?: 'prescription', created_at: any, data: any, doctor_id: any, user_id: any, doctor: { __typename?: 'doctor', name: string, hospital: { __typename?: 'hospital', name: string, address: string, certificates: any, pin: string } }, user: { __typename?: 'user', name: string } } | null };

export type GetReportsSubscriptionVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By> | Report_Order_By>;
  where?: InputMaybe<Report_Bool_Exp>;
}>;


export type GetReportsSubscription = { __typename?: 'subscription_root', report: Array<{ __typename?: 'report', data: any, id: any, created_at: any, lab_technician: { __typename?: 'lab_technician', name: string, lab: { __typename?: 'labs', name: string } } }> };

export type GetReportsCountSubscriptionVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By> | Report_Order_By>;
  where?: InputMaybe<Report_Bool_Exp>;
}>;


export type GetReportsCountSubscription = { __typename?: 'subscription_root', report_aggregate: { __typename?: 'report_aggregate', aggregate?: { __typename?: 'report_aggregate_fields', count: number } | null } };

export type GetOneReportQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetOneReportQuery = { __typename?: 'query_root', report_by_pk?: { __typename?: 'report', data: any, id: any, created_at: any, lab_technician: { __typename?: 'lab_technician', name: string, lab: { __typename?: 'labs', name: string } } } | null };


export const AddPrescriptionDocument = gql`
    mutation addPrescription($data: prescription_insert_input!) {
  insert_prescription_one(object: $data) {
    id
  }
}
    `;
export type AddPrescriptionMutationFn = Apollo.MutationFunction<AddPrescriptionMutation, AddPrescriptionMutationVariables>;

/**
 * __useAddPrescriptionMutation__
 *
 * To run a mutation, you first call `useAddPrescriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPrescriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPrescriptionMutation, { data, loading, error }] = useAddPrescriptionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddPrescriptionMutation(baseOptions?: Apollo.MutationHookOptions<AddPrescriptionMutation, AddPrescriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPrescriptionMutation, AddPrescriptionMutationVariables>(AddPrescriptionDocument, options);
      }
export type AddPrescriptionMutationHookResult = ReturnType<typeof useAddPrescriptionMutation>;
export type AddPrescriptionMutationResult = Apollo.MutationResult<AddPrescriptionMutation>;
export type AddPrescriptionMutationOptions = Apollo.BaseMutationOptions<AddPrescriptionMutation, AddPrescriptionMutationVariables>;
export const GetPrescriptionCountDocument = gql`
    subscription getPrescriptionCount($where: prescription_bool_exp, $limit: Int, $order_by: [prescription_order_by!], $offset: Int) {
  prescription_aggregate(
    where: $where
    limit: $limit
    offset: $offset
    order_by: $order_by
  ) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useGetPrescriptionCountSubscription__
 *
 * To run a query within a React component, call `useGetPrescriptionCountSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetPrescriptionCountSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrescriptionCountSubscription({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      order_by: // value for 'order_by'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetPrescriptionCountSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GetPrescriptionCountSubscription, GetPrescriptionCountSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetPrescriptionCountSubscription, GetPrescriptionCountSubscriptionVariables>(GetPrescriptionCountDocument, options);
      }
export type GetPrescriptionCountSubscriptionHookResult = ReturnType<typeof useGetPrescriptionCountSubscription>;
export type GetPrescriptionCountSubscriptionResult = Apollo.SubscriptionResult<GetPrescriptionCountSubscription>;
export const GetPrescriptionsDocument = gql`
    subscription getPrescriptions($where: prescription_bool_exp, $limit: Int, $order_by: [prescription_order_by!], $offset: Int) {
  prescription(where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    created_at
    id
    data
    doctor {
      name
      hospital {
        name
        address
        certificates
        pin
      }
    }
    user {
      name
    }
    doctor_id
    user_id
  }
}
    `;

/**
 * __useGetPrescriptionsSubscription__
 *
 * To run a query within a React component, call `useGetPrescriptionsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetPrescriptionsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrescriptionsSubscription({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      order_by: // value for 'order_by'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetPrescriptionsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GetPrescriptionsSubscription, GetPrescriptionsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetPrescriptionsSubscription, GetPrescriptionsSubscriptionVariables>(GetPrescriptionsDocument, options);
      }
export type GetPrescriptionsSubscriptionHookResult = ReturnType<typeof useGetPrescriptionsSubscription>;
export type GetPrescriptionsSubscriptionResult = Apollo.SubscriptionResult<GetPrescriptionsSubscription>;
export const GetOnePrescriptionDocument = gql`
    query getOnePrescription($id: uuid!) {
  prescription_by_pk(id: $id) {
    created_at
    data
    doctor {
      name
      hospital {
        name
        address
        certificates
        pin
      }
    }
    user {
      name
    }
    doctor_id
    user_id
  }
}
    `;

/**
 * __useGetOnePrescriptionQuery__
 *
 * To run a query within a React component, call `useGetOnePrescriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOnePrescriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOnePrescriptionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOnePrescriptionQuery(baseOptions: Apollo.QueryHookOptions<GetOnePrescriptionQuery, GetOnePrescriptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOnePrescriptionQuery, GetOnePrescriptionQueryVariables>(GetOnePrescriptionDocument, options);
      }
export function useGetOnePrescriptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOnePrescriptionQuery, GetOnePrescriptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOnePrescriptionQuery, GetOnePrescriptionQueryVariables>(GetOnePrescriptionDocument, options);
        }
export type GetOnePrescriptionQueryHookResult = ReturnType<typeof useGetOnePrescriptionQuery>;
export type GetOnePrescriptionLazyQueryHookResult = ReturnType<typeof useGetOnePrescriptionLazyQuery>;
export type GetOnePrescriptionQueryResult = Apollo.QueryResult<GetOnePrescriptionQuery, GetOnePrescriptionQueryVariables>;
export const GetReportsDocument = gql`
    subscription getReports($limit: Int, $offset: Int, $order_by: [report_order_by!], $where: report_bool_exp) {
  report(limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
    data
    id
    lab_technician {
      name
      lab {
        name
      }
    }
    created_at
  }
}
    `;

/**
 * __useGetReportsSubscription__
 *
 * To run a query within a React component, call `useGetReportsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetReportsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReportsSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetReportsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GetReportsSubscription, GetReportsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetReportsSubscription, GetReportsSubscriptionVariables>(GetReportsDocument, options);
      }
export type GetReportsSubscriptionHookResult = ReturnType<typeof useGetReportsSubscription>;
export type GetReportsSubscriptionResult = Apollo.SubscriptionResult<GetReportsSubscription>;
export const GetReportsCountDocument = gql`
    subscription getReportsCount($limit: Int, $offset: Int, $order_by: [report_order_by!], $where: report_bool_exp) {
  report_aggregate(
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useGetReportsCountSubscription__
 *
 * To run a query within a React component, call `useGetReportsCountSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetReportsCountSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReportsCountSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetReportsCountSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GetReportsCountSubscription, GetReportsCountSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetReportsCountSubscription, GetReportsCountSubscriptionVariables>(GetReportsCountDocument, options);
      }
export type GetReportsCountSubscriptionHookResult = ReturnType<typeof useGetReportsCountSubscription>;
export type GetReportsCountSubscriptionResult = Apollo.SubscriptionResult<GetReportsCountSubscription>;
export const GetOneReportDocument = gql`
    query getOneReport($id: uuid!) {
  report_by_pk(id: $id) {
    data
    id
    lab_technician {
      name
      lab {
        name
      }
    }
    created_at
  }
}
    `;

/**
 * __useGetOneReportQuery__
 *
 * To run a query within a React component, call `useGetOneReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneReportQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneReportQuery(baseOptions: Apollo.QueryHookOptions<GetOneReportQuery, GetOneReportQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneReportQuery, GetOneReportQueryVariables>(GetOneReportDocument, options);
      }
export function useGetOneReportLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneReportQuery, GetOneReportQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneReportQuery, GetOneReportQueryVariables>(GetOneReportDocument, options);
        }
export type GetOneReportQueryHookResult = ReturnType<typeof useGetOneReportQuery>;
export type GetOneReportLazyQueryHookResult = ReturnType<typeof useGetOneReportLazyQuery>;
export type GetOneReportQueryResult = Apollo.QueryResult<GetOneReportQuery, GetOneReportQueryVariables>;