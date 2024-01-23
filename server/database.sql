CREATE TABLE "todo" (
	"id" SERIAL PRIMARY KEY,
	"item" varchar(255),
	"notes" varchar(255),
	"completed" boolean DEFAULT false
);

INSERT INTO todo ("item" "notes")
VALUES 
('Clean out car', 'Buy tire cleaner and start on Saturday');
