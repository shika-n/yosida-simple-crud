CREATE DATABASE family_restaurant;
USE family_restaurant;

CREATE TABLE restaurants (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	address VARCHAR(255) NOT NULL,
	telephone VARCHAR(20) NOT NULL,
	owner VARCHAR(50) NOT NULL,
	area FLOAT NOT NULL,
	capacity INT NOT NULL,
	is_barrier_free BOOLEAN NOT NULL,
	is_parking_available BOOLEAN NOT NULL,
	parking_capacity INT NOT NULL,
	open_time TIME NOT NULL,
	close_time TIME NOT NULL
);

-- Seed --
INSERT INTO restaurants(
	name,
	address,
	telephone,
	owner,
	area,
	capacity,
	is_barrier_free,
	is_parking_available,
	parking_capacity,
	open_time,
	close_time
) VALUES
(
	"Main Branch",
	"Main St.",
	"123-4567-8900",
	"Owner-san",
	250,
	200,
	TRUE,
	TRUE,
	30,
	00:00,
	24:00
), (
	"First Branch",
	"Branchy St.",
	"123-4567-8901",
	"Maitake",
	100,
	50,
	TRUE,
	FALSE,
	0,
	07:00,
	23:00
), (
	"Main Branch",
	"Main St.",
	"123-4567-8902",
	"Mr. Grass",
	150,
	80,
	FALSE,
	TRUE,
	30,
	09:00,
	01:00
);
