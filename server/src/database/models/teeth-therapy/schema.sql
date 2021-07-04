DROP TABLE IF EXISTS "teeth_therapy" CASCADE;

CREATE TABLE "teeth_therapy" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "price" FLOAT,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW()
);
