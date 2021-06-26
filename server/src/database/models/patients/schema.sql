DROP TABLE IF EXISTS "patients" CASCADE;

CREATE TABLE "patients" (
  "id" SERIAL PRIMARY KEY,
  "first_name" VARCHAR(20) NOT NULL,
  "last_name" VARCHAR(20) NOT NULL,
  "birthday" TIMESTAMP,
  "phone" VARCHAR(50) NOT NULL
);
