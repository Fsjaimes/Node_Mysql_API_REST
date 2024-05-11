CREATE database if not exists companydb;

USE companydb;

CREATE TABLE empleado (
	id INT(11) NOT NULL auto_increment,
    name VARCHAR(50) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    primary key (ID)
);

DESCRIBE empleado;

SELECT * FROM empleado;