CREATE TABLE `lotteries` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`title` varchar(512) NOT NULL,
	`begin_at` date,
	`end_at` date);
