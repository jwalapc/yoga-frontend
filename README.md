
## Yoga Admission Form Project

#### This project is a simple web application for yoga admission. Users can fill out an admission form providing their personal details, and the data will be stored in a MySQL database. The project consists of both frontend and backend components.



## Tech Stack

**Client:** React

**Server:** Node, Express

**Database:** Mysql


## Project Structure
The project is structured into two main parts:

Frontend (YOGA FRONTEND): This part handles the user interface and form submission. It is built using React.

Backend (YOGA BACKEND): This part is responsible for handling form submissions, processing payments (mocked), and storing data in a MySQL database. It is built using Node.js and Express.



## Getting Started


To run the project locally, follow these steps:

```bash
  npm install my-project
  cd my-project
  npm start

```
For backend go to this repo: https://github.com/jwalapc/yoga-backend and change the database credentials.

```bash
  npm install my-project
  cd my-project
  node server.js

```


## Database
Make sure you have a MySQL database set up. You can use tools like phpMyAdmin or MySQL Workbench.

Create a database named "yoga_admission" and run the SQL script provided in the "Database Setup" section.

Run the below Querry:

    
### Usage/Examples

```javascript
CREATE DATABASE IF NOT EXISTS yoga_admission;

USE yoga_admission;

CREATE TABLE IF NOT EXISTS user_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  age INT NOT NULL,
  gender VARCHAR(10) NOT NULL,
  phoneNumber VARCHAR(15) NOT NULL,
  emailAddress VARCHAR(255) NOT NULL,
  batch VARCHAR(10) NOT NULL,
  startDate DATE NOT NULL
);

```


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)



## Assumptions

- The payment processing is mocked and assumed to be always successful.
- The project uses a MySQL database for data storage.

- Styling is kept minimal, and you can customize it as per your design preferences

