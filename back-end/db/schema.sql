DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS stilettos;

CREATE TABLE stilettos (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NUll,
    image TEXT,
    description TEXT,
    price INTEGER,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <=5),
    featured BOOLEAN
);
