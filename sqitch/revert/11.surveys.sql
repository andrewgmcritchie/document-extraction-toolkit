-- Revert pdf-extractor:11.surveys from pg

BEGIN;

SET client_min_messages = 'warning';

DROP TABLE IF EXISTS data.surveys;

COMMIT;