-- Deploy pdf-extractor:11.surveys to pg

BEGIN;

SET client_min_messages = 'warning';

-------------------------------------------------------------------------------------------------

-- create 'surveys' table to store ...
CREATE TABLE data.surveys (
    id uuid_text NOT NULL DEFAULT uuid_generate_v1(),
    subject integer,
    week integer,
    question text,
    answer text,
    autonomy boolean,
    awareness boolean,
    relatedness boolean,
    created_at timestamp with time zone DEFAULT NOW(),
    updated_at timestamp with time zone DEFAULT now(),
    primary key(id)
);

-------------------------------------------------------------------------------------------------

-- comments
COMMENT ON TABLE data.surveys IS
    'The table stores information about documents';

COMMENT ON COLUMN data.surveys.id IS
    'The survey id';

COMMENT ON COLUMN data.surveys.subject IS
	'The patience response';

COMMENT ON COLUMN data.surveys.week IS
	'The patience response';

COMMENT ON COLUMN data.surveys.question IS
	'The patience response';

COMMENT ON COLUMN data.surveys.answer IS
	'The patience response';

COMMENT ON COLUMN data.surveys.autonomy IS
	'The internal locus prediction';

COMMENT ON COLUMN data.surveys.awareness IS
	'The emotions prediction';

COMMENT ON COLUMN data.surveys.relatedness IS
	'The belonging/acceptance prediction';

COMMENT ON COLUMN data.surveys.updated_at IS
    'The date of when the survey was updated';

COMMENT ON COLUMN data.surveys.created_at IS
    'The date of when the survey was created';

create trigger set_updated_at_timestamp
before update on data.surveys
for each row execute procedure utils.trigger_set_timestamp();

COMMIT;