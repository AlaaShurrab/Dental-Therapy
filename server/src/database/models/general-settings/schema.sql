DROP TABLE IF EXISTS "general_settings" CASCADE;

CREATE TABLE "general_settings" (
  "id" SERIAL PRIMARY KEY,
  "open_time" TIME NOT NULL,
  "working_hours" INTEGER NOT NULL,
  "appointment_duration_in_minutes" INTEGER NOT NULL,
  "days_off" TEXT[], --['saterday', 'sunday']
  "update_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "general_settings"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
