-- DROP DATABASE IF EXISTS BookmarksDB;
-- CREATE DATABASE BookmarksDB;
-- USE BookmarksDB;
use jessicahu22;

DROP TABLE IF EXISTS Users;
CREATE TABLE Users
(
	UserName varchar(225) NOT NULL PRIMARY KEY,
	Password varchar(225) NOT NULL
);

DROP TABLE IF EXISTS Bookmarks;
CREATE TABLE Bookmarks
(
	BookmarkID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Url varchar(225) NOT NULL,
	User varchar(225) NOT NULL,
	FOREIGN KEY (User) REFERENCES Users(UserName)
);