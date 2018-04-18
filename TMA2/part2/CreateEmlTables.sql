DROP TABLE IF EXISTS Units;
CREATE TABLE Units
(
	ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Title varchar(225) not NULL,
	Overview text
);

DROP TABLE IF EXISTS Chapters;
CREATE TABLE Chapters
(
	ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Title varchar(225) NOT NULL,
	Overview text,
	UnitID int NOT NULL,
	FOREIGN KEY (UnitID) REFERENCES Units(ID)
);

DROP TABLE IF EXISTS Sections;
CREATE TABLE Sections
(
	ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Title varchar(225) NOT NULL,
	Content text,
	ChapterID int NOT NULL,
	FOREIGN KEY (ChapterID) REFERENCES Chapters(ID)
);

-- Quiz Tables //////////////////////////////////////////////
DROP TABLE IF EXISTS Quizzes;
CREATE TABLE Quizzes
(
	ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Title varchar(225) NOT NULL,
	UnitID int NOT NULL,
	FOREIGN KEY (UnitID) REFERENCES Units(ID)
);

DROP TABLE IF EXISTS QuizQuestions;
CREATE TABLE QuizQuestions
(
	ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Question varchar(225) NOT NULL,
	QuizID int NOT NULL,
	FOREIGN KEY (QuizID) REFERENCES Quizzes(ID)
);

DROP TABLE IF EXISTS QuizAnswers;
CREATE TABLE QuizAnswers
(
	ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Answer varchar(225) NOT NULL,
	Correct int NOT NULL,
	QuestionID int NOT NULL,
	FOREIGN KEY (QuestionID) REFERENCES QuizQuestions(ID)
);