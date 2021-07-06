DROP TABLE IF EXISTS "financial_records" CASCADE;

CREATE TABLE "financial_records" (
  "id" SERIAL PRIMARY KEY,
  "patient_id" INTEGER REFERENCES patients(id) NOT NULL,
  "title" TEXT,
  "payment" FLOAT,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW()
);
