DROP TABLE IF EXISTS "patient_general_therapy" CASCADE;

CREATE TABLE "patient_general_therapy" (
  "id" SERIAL PRIMARY KEY,
  "patient_id" INTEGER REFERENCES patients(id) NOT NULL,
  "general_therapy_id" INTEGER REFERENCES general_therapy(id) NOT NULL,
  "therapy_number" INTEGER NOT NULL,
  "notes" TEXT,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW()
);
