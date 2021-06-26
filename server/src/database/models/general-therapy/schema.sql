DROP TABLE IF EXISTS "general_therapy" CASCADE;

CREATE TABLE "general_therapy" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "price" FLOAT
);
