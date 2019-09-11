DROP DATABASE IF EXISTS manual_nodejs;
CREATE DATABASE manual_nodejs;


\c manual_nodejs;


create table users(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
  profile_pic VARCHAR
);
