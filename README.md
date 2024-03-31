
## EMOTORAD FULL STACK ASSIGNMENT

  * [Introduction](#introduction)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  * [Configuration and Setup](#configuration-and-setup)
  


## Demo link
Please find the attached Video:
https://drive.google.com/file/d/1JQkmo7NnDj6Ek2uyAwjGkUIa-Fv8fXqY/view?usp=sharing



## Introduction
This is a MERN Stack project based on Dash Board and Sign In with key features such as Charts, Cards and Adding New Profiles to Database.
Login Page:
![Screenshot (523)](https://github.com/Yashg5311/EMotoradAssignment/assets/91370994/cedfe99d-3f67-44ce-b40f-7c5f2f97c6d5)

This is the login page as described..which also consists of Sign In with Google and Email address and Password for Login.


Register page:
![Screenshot (522)](https://github.com/Yashg5311/EMotoradAssignment/assets/91370994/9e33bed1-1192-416b-87db-bdb74ed01bc6)

This is the Register page , Name, email and Password...You can craete a account and then Log In


Home Page:
![Screenshot (524)](https://github.com/Yashg5311/EMotoradAssignment/assets/91370994/36d1ba25-73a7-434f-86f6-532cca109345)

![Screenshot (526)](https://github.com/Yashg5311/EMotoradAssignment/assets/91370994/eb390f38-b6e3-4f64-8f6b-a1cf271b4962)

Cards Component:
![image](https://github.com/Yashg5311/EMotoradAssignment/assets/91370994/05cb8d86-b5a8-4fde-8807-32543622c601)


Charts Component:
![image](https://github.com/Yashg5311/EMotoradAssignment/assets/91370994/3502ef22-8c6f-4e14-9a62-d2f21af222a5)


Pop Up Box:
![Screenshot (528)](https://github.com/Yashg5311/EMotoradAssignment/assets/91370994/a8e0f8a1-a7ab-4704-9a85-b9f6ef2f1952)

![Screenshot (530)](https://github.com/Yashg5311/EMotoradAssignment/assets/91370994/a9d031ba-76a7-4d9d-9283-fbdb198c6b02)

A pOp up For adding new Profiles


## Key Features
- For Styling in FrontEnd , Ant Design Library was particular used which contains a set of high quality components and demos for building rich, interactive user interfaces.
- Implemented Google Sign and Logout through Firebase, But facing a glitch due to not able to successfully Login
- Implemented JWT Authentication and Bcrypt Password Hashing.
- Backend was implemented using expressjs and nodejs.
- ApexChart library was used to implement Chartjs and Donut Chart.
- 2 Models were craeted at Bacckend..one for users and one for adding Profiles.
- Delpoyed on Render, both Backend and Frontend.


## Technologies used
This project was created using the following technologies.

#### Frontend

- React JS
- Antd library
- Redux
- JavaScript
- Firebase
- ApexCharts
- React Charts
  

#### Backend

- ExpressJS
- NodeJs
- Mongoose
- JWT (For authentication)
- Bcryptjs (for data encryption)

#### Database
MongoDB (MongoDB Atlas)

## Configuration and Setup
In order to run this project locally, simply fork and clone the repository. 
- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the server on the other terminal)

In the first terminal

$ cd client
$ npm install (to install client-side dependencies)
$ npm start (to start the client)


For setting up backend
- cd create a .env file in the root of your directory.
- Supply the following credentials

MONGO_URL=
JWT_SECRET=





Provide some random key in ACCESS_TOKEN_SECRET or you could generate one using node enter the below command in the terminal to genrate a random secret key 


node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"


In the second terminal (*in the project root directory (server)).

```
$ npm install (to install server-side dependencies)
& node server.js (to start the server)
