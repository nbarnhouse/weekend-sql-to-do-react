CREATE TABLE "todo" (
	"id" SERIAL PRIMARY KEY,
	"item" varchar(255),
	"notes" varchar(255),
	"completed" boolean DEFAULT false
);

INSERT INTO todo ("item" "notes")
VALUES 
('Clean out car', 'Buy tire cleaner and start on Saturday'), 
('Wash the car', 'Get husband and kids to do it on Saturday!'),
('Finish Homework Assignments', 'Make sure you start on Thursday');
