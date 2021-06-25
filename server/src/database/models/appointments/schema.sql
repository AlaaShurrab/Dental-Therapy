DROP TABLE IF EXISTS "appointments" CASCADE;

CREATE TABLE "appointments" (
  "id" SERIAL PRIMARY KEY,
  "patient_id" INTEGER REFERENCES patients(id) NOT NULL,
  "appointment_date" TIMESTAMP,
  "appointment_time" TIME NOT NULL,
  "notes" TEXT
);
