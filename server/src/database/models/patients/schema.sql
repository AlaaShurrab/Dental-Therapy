DROP TABLE IF EXISTS "patients" CASCADE;

CREATE TABLE "patients" (
  "id" SERIAL PRIMARY KEY,
  "first_name" VARCHAR(20) NOT NULL,
  "last_name" VARCHAR(20) NOT NULL,
  "birthday" TIMESTAMP,
  "phone" VARCHAR(50) NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "patients"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

