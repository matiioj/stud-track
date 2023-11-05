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

CREATE TABLE course(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(400)
);
-- DESCRIBE course;

CREATE TABLE studentcourses(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES student(id),
    FOREIGN KEY (course_id) REFERENCES course(id)
);


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
CREATE TRIGGER CalculateAgeAfterUpdate
AFTER UPDATE ON student
FOR EACH ROW
BEGIN
    IF NEW.birthdate <> OLD.birthdate THEN
        SET NEW.age = TIMESTAMPDIFF(YEAR, NEW.birthdate, CURDATE());
    END IF;
END;
//
DELIMITER ;

-- Insert data into the student table with automatic age calculation
INSERT INTO student (name, surname, birthdate) VALUES
    ('Alicia', 'Perez', '2006-09-10'),
    ('Rodrigo', 'Fernandez', '2005-04-16'),
    ('Fernando', 'Rodriguez', '2006-01-25');

-- Insert data into the course table
INSERT INTO course (name, description) VALUES
    ('Matematica', 'Introduccion a Matematica'),
    ('Historia', 'Introduccion a Historia'),
    ('Ciencia', 'Introduccion a Ciencia');

-- Insert data into the studentcourses table to link students with courses
INSERT INTO studentcourses (student_id, course_id) VALUES
    (1, 1), -- Alicia anotada a Matematica
    (1, 2), -- Alicia anotada a Historia
    (2, 1), -- Rodrigo anotado a Matematica
    (3, 3); -- Carlos anotado en Ciencia
