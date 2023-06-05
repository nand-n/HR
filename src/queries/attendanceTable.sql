CREATE TABLE attendace(
    id serial PRIMARY key ,
    emp_id int not null REFERENCES employees(id) on DELETE CASCADE,
    date date not null,
    presence boolean not null , 
    created_at TIMESTAMP DEFAULT CUURRENT_TIMESTAMP
)