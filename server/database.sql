CREATE TABLE "todo" (
	"id" SERIAL PRIMARY KEY,
	"item" varchar(255),
	"date" date,
	"notes" varchar(255),
	"completed" boolean DEFAULT false
);

INSERT INTO todo ("item", "due", "notes")
VALUES 
('Wash the car', '2024-01-14', 'Make sure you start on Thursday'),
('Clean out car', '2024-01-15', 'Buy tire cleaner and start on Saturday'), 
('Finish Homework Assignments', '2024-01-15', 'Get husband and kids to do it on Saturday!');
