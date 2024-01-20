CREATE TABLE "todo" (
	"id" SERIAL PRIMARY KEY,
	"item" varchar(255),
	"due" date, 
	"notes" varchar(255)
);

INSERT INTO todo ("item", "due", "notes")
VALUES 
('Clean out car', '2024-01-15', 'Buy tire cleaner and start on Saturday');
