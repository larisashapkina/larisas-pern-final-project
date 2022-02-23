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

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    title TEXT,
    content TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    stiletto_id INTEGER REFERENCES stilettos (id)
    ON DELETE CASCADE
);