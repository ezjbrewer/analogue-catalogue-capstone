## Analogue Catalogue

### The Problem
Many record collectors have trouble sorting through their assortment of records and like to gather data about them. Analogue Catalogue looks to remedy the difficulties of keeping track of collectors' records by introducing a streamlined approach with a user-friendly interface and different ways to sort through records while introducing a social media approach to discussing albums with other users.

### Database
[Analogue Catalogue Data](https://github.com/ezjbrewer/analogue-api)

### Languages
- HTML
- CSS
- JavaScript
- REACT

### Server Host
- Firebase

### Installation and Setup
If you wish to clone this project, you will need Node and NPM installed on your computer

#### To install
Enter `npm install` in your terminal on your working folder

#### To run database
Enter `json-server database.json -p 8000` in yor terminal on your data folder

#### To run application
Enter `npm run dev` in your terminal on your working folder
Redirect yourself to the login page
http://localhost:8000/login

### Features
#### Creating, editting, deleting, and viewing records
  - The user is able to add records into their database. This includes the artist, the name of the record, the genre, the year, and many more details. The user is also able to delete and edit their records upon creation. The user is also able to view all of their currently entered records in a table on their `My Catalogue` page

### Creating, editting, liking, and commenting on posts
  - The user is able to create a post by selecting a record from the table presented to them on their `My Catalogue` page. They may write any thoughts they may have on the record. Other users are able to like and comment on each post. The user is also allowed access to edit and delete their own respective post

