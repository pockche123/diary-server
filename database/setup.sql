DROP TYPE IF EXISTS DiaryCategory;
DROP TABLE IF EXISTS DiaryEntry; 
DROP TABLE IF EXISTS users;

CREATE TYPE DiaryCategory AS ENUM ('WORK', 'PERSONAL', 'FITNESS', 'TRAVEL', 'OTHER');
CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    is_admin Boolean Default false,
    PRIMARY KEY (id)
);

CREATE TABLE DiaryEntry (
  id INT GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255),
  content TEXT,
  timestamp TIMESTAMP,
  category DiaryCategory,
  user_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);


INSERT INTO users (username, password, is_admin)
VALUES
  ('john12', 'hashed_password_1', false),
  ('mary43', 'hashed_password_2', false);


-- Inserting data into DiaryEntry table
INSERT INTO DiaryEntry (title, content, timestamp, category, user_id)
VALUES
  ('Meeting with Client', 'Discussed project requirements and timelines.', '2023-11-23 10:00:00', 'WORK', 1),
  ('Morning Jog', 'Ran 5 miles in the park.', '2023-11-23 07:00:00', 'FITNESS', 2),
  ('Family Vacation', 'Visited the beach and enjoyed the sunset.', '2023-11-23 15:00:00', 'TRAVEL', 2),
  ('Personal Reflection', 'Spent quiet time reflecting on personal goals.', '2023-11-23 18:30:00', 'PERSONAL', 1),
  ('Shopping List', 'Bought groceries and household essentials.', '2023-11-23 12:45:00', 'OTHER', 2);

