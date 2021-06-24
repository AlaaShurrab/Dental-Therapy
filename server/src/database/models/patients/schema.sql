DROP TABLE IF EXISTS "patients" CASCADE;

CREATE TABLE "patients" (
  "id" SERIAL PRIMARY KEY,
  "full_name" VARCHAR(50) NOT NULL,
  "first_name" VARCHAR(20) NOT NULL,
  "last_name" VARCHAR(20) NOT NULL,
  "birthday" TIMESTAMP::timestamp::date,
  "phone" VARCHAR(50) NOT NULL
);