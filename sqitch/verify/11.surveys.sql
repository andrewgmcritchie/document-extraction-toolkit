-- Verify pdf-extractor:11.surveys on pg

BEGIN;

SELECT id, subject, week, question, answer, autonomy, awareness, relatedness
FROM data.surveys
WHERE FALSE;

ROLLBACK;
