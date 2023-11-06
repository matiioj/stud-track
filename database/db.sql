-- Create DB
CREATE DATABASE IF NOT EXISTS studtrack;

-- Use schema
USE studtrack;

-- Create Tables

CREATE TABLE student(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    birthdate DATE,
    age INT 
);
-- DESCRIBE student;

-- Insert data to get a seed DB
DELIMITER //
CREATE TRIGGER CalculateAgeBeforeInsert
BEFORE INSERT ON student
FOR EACH ROW
BEGIN
    SET NEW.age = TIMESTAMPDIFF(YEAR, NEW.birthdate, CURDATE());
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER CalculateAgeBeforeUpdate
BEFORE UPDATE ON student
FOR EACH ROW
BEGIN
    SET NEW.age = TIMESTAMPDIFF(YEAR, NEW.birthdate, CURDATE());
END;
//
DELIMITER ;

-- Insert data into the student table with automatic age calculation
INSERT INTO student (name, surname, birthdate) VALUES
    ('Alicia', 'Perez', '2006-09-10'),
    ('Rodrigo', 'Fernandez', '2005-04-16'),
    ('Fernando', 'Rodriguez', '2006-01-25');

