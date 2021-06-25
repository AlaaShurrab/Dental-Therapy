DROP TABLE IF EXISTS "patient_teeth_therapy" CASCADE;

CREATE TABLE "patient_teeth_therapy" (
  "id" SERIAL PRIMARY KEY,
  "patient_id" INTEGER REFERENCES patients(id) NOT NULL,
  "teeth_therapy_id" INTEGER REFERENCES teeth_therapy(id) NOT NULL,
  "tooth_lable" VARCHAR(5) NOT NULL,
  "therapy_number" INTEGER NOT NULL,
  "notes" TEXT,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW()
);
