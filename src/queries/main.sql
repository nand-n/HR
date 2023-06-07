-- Custome Gender Type 
-- create type gender_type as ENUM('male' , 'Female');

--
-- create type status_types as ENUM('Active' , 'Inactive');

-- -- Create Users table 

-- create table users(
--     id serial PRIMARY key , 
--     full_name varchar(250) not null ,
--     email VARCHAR(250) not null ,
--     password VARCHAR(250) not null,
--     gender  gender_type not null , 
--     role VARCHAR(250) not null  ,
--     status status_types not null , 
--     schema_name  varchar(250) , 
--     created_at TIMESTAMP DEFAULT current_timestamp
--  )

ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE(email)