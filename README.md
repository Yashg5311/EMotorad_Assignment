
## EMOTORAD FULL STACK ASSIGNMENT

  * [Introduction](#introduction)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  * [Configuration and Setup](#configuration-and-setup)
  

## Live Link:
Please find the Live Link
https://emotoradassignment.onrender.com/login


Please login from Register and Sign In if not logging from Google. There has been a technical glitch in Firebase Authentication.


## Demo link
Please find the attached Video:
https://drive.google.com/file/d/1JQkmo7NnDj6Ek2uyAwjGkUIa-Fv8fXqY/view?usp=sharing



## Introduction
This is a MERN Stack project based on Dash Board and Sign In with key features such as Charts, Cards and Adding New Profiles to Database.
Login Page:
![Screenshot (519)](https://github.com/Yashg5311/EMotorad_Assignment/assets/91370994/f518b60f-8506-4e3b-a4d6-c6703433940c)

This is the login page as described..which also consists of Sign In with Google and Email address and Password for Login.
(If Firebase not working, Kindly please create a profile and then register)

Register page:
![Screenshot (522)](https://github.com/Yashg5311/EMotorad_Assignment/assets/91370994/4cd7228e-a468-41ca-bbf7-7a15335ee656)

This is the Register page , Name, email and Password...You can craete a account and then Log In


Home Page:
![Screenshot (525)](https://github.com/Yashg5311/EMotorad_Assignment/assets/91370994/78c7b285-2aac-48fc-b1fb-c39029921381)

![Screenshot (527)](https://github.com/Yashg5311/EMotorad_Assignment/assets/91370994/0c3d1baf-569a-4618-8859-0382c5e30cba)

Cards Component:
![image](https://github.com/Yashg5311/EMotoradAssignment/assets/91370994/05cb8d86-b5a8-4fde-8807-32543622c601)


Charts Component:
![image](https://github.com/Yashg5311/EMotoradAssignment/assets/91370994/3502ef22-8c6f-4e14-9a62-d2f21af222a5)


Pop Up Box:
![Screenshot (529)](https://github.com/Yashg5311/EMotorad_Assignment/assets/91370994/ab732b58-78a6-4889-b9c8-9cac2ef2b06e)
![Screenshot (531)](https://github.com/Yashg5311/EMotorad_Assignment/assets/91370994/4dab68f3-4419-46b0-9551-98cd472bc873)


A pOp up For adding new Profiles


## Key Features
- For Styling in FrontEnd , Ant Design Library was particular used which contains a set of high quality components and demos for building rich, interactive user interfaces.
- Implemented Google Sign and Logout through Firebase, But facing a glitch due to not able to successfully Login
- Implemented JWT Authentication and Bcrypt Password Hashing.
- Backend was implemented using expressjs and nodejs.
- ApexChart library was used to implement Chartjs and Donut Chart.
- 2 Models were craeted at Bacckend..one for users and one for adding Profiles.
- Delpoyed on Render, both Backend and Frontend.

## Problems Faced
Faced In Firebase Authentication and Deploying. Also in Making Chart.


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



