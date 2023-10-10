CREATE DATABASE ecommerce;

CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

ALTER TABLE product
    ADD description VARCHAR(255),
    ADD type VARCHAR(255),
    ADD logo_image BIGINT;
;

ALTER TABLE product RENAME TO brand;

CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    image BIGINT,
    brand BIGINT,
    type VARCHAR,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    category BIGINT
);

CREATE TABLE category(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    parent BIGINT
);

CREATE TABLE productvariant(
    id SERIAL PRIMARY KEY,
    product BIGINT,
    color BIGINT,
    size BIGINT,
    stock_quantity INT,
    brand BIGINT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    size_type VARCHAR
);


CREATE TABLE orderItem(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    product_variant BIGINT,
    qty BIGINT,
    price BIGINT,
    created_at TIMESTAMP
);

CREATE TABLE makeOrder(
    id SERIAL PRIMARY KEY,
    owner BIGINT,
    first_name VARCHAR,
    last_name VARCHAR,
    email VARCHAR,
    phone BIGINT,
    address VARCHAR,
    city VARCHAR,
    state VARCHAR,
    postal_code BIGINT,
    resident_type VARCHAR,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    status BIGINT,
    payment_method VARCHAR,
    is_paid BOOLEAN
);


CREATE TABLE customer(
    id SERIAL PRIMARY KEY,
    user_ VARCHAR,
    first_name VARCHAR,
    last_name VARCHAR,
    email BIGINT
);

CREATE TABLE webuser (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    email BIGINT,
    password BIGINT,
    is_staff BOOLEAN,
    is_superuser BOOLEAN
);

CREATE TABLE ShippingAddress (
    id SERIAL PRIMARY KEY,
    address1 BIGINT,
    address2 BIGINT,
    city VARCHAR,
    state VARCHAR,
    postal_code BIGINT,
    resident_type BIGINT,
    owner BIGINT
);

CREATE TABLE ProductImage (
    id SERIAL PRIMARY KEY,
    url BIGINT,
    product_variant BIGINT
);

CREATE TABLE test1 (
    id SERIAL PRIMARY KEY,
    url BIGINT,
    product_variant BIGINT
);

CREATE TABLE test2 (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    email BIGINT
);


SELECT
    test2.id,
    first_name,
    last_name
FROM
    test2
INNER JOIN test1
    ON test1.id = test2.id;


ALTER TABLE brand
RENAME COLUMN id TO brand_id;

ALTER TABLE brand
DROP COLUMN type;

ALTER TABLE brand
DROP COLUMN description;

ALTER TABLE brand
RENAME COLUMN logo_image TO image;

ALTER TABLE webuser RENAME TO user;

ALTER TABLE product
    ADD brand_id BIGINT;


ALTER TABLE brand
ALTER COLUMN image TYPE image::BYTEA;

ALTER TABLE brand
ALTER COLUMN image TYPE BYTEA;

ALTER TABLE brand
    ADD logo BYTEA
;

ALTER TABLE brand
DROP COLUMN image;

ALTER TABLE brand
DROP COLUMN logo;

ALTER TABLE brand
    ADD image BYTEA
;

ALTER TABLE brand
ALTER COLUMN VARCHAR TYPE BLOB;

ALTER TABLE brand
ALTER COLUMN image TYPE BLOB;

ALTER TABLE brand
ALTER COLUMN image TYPE BYTEA;

ALTER TABLE webuser
    ADD password VARCHAR,
    ADD is_staff BOOLEAN,
    ADD is_superuser BOOLEAN
;

ALTER TABLE webuser
ALTER COLUMN password TYPE VARCHAR
;

ALTER TABLE webuser
ALTER COLUMN email TYPE VARCHAR
;

ALTER TABLE webuser
RENAME COLUMN id TO user_id;