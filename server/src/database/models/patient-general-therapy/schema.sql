DROP TABLE IF EXISTS "patient_general_therapy" CASCADE;

CREATE TABLE "patient_general_therapy" (
  "id" SERIAL PRIMARY KEY,
  "patient_id" INTEGER REFERENCES patients(id) NOT NULL,
  "global_therapy_id" INTEGER REFERENCES global_therapy(id) NOT NULL,
  "therapy_number" INTEGER NOT NULL,
  "notes" TEXT,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW()
);
