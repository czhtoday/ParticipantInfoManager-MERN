# Uplift NW Participant Manager (Information Entry and Manage System)

## Overview

Uplift Participant Manager is a robust full stack web-based application designed to facilitate the easy entry and management of participant information. The system is built to ensure data consistency and provide a scalable solution that can integrate with larger data ecosystems like Salesforce.

## Watch Demonstration Video

[![Watch the Additional Video](https://img.youtube.com/vi/N6RIV3pazL4/hqdefault.jpg)](https://youtu.be/N6RIV3pazL4)



## Background Story

This project was inspired by a pressing need identified within a nonprofit organization named Uplift NW, that focuses on providing services to its participants. The organization was struggling with data analysis, aiming to better understand their current participants to offer more effective services. However, the data collected was inconsistent, with many crucial information points missing, making it inefficient for the organization to utilize the data effectively.

The organization's internal team lacked technical expertise, making digitalization of participant data collection essential. Tools like Google Forms proved cumbersome for system updates, while professional tools like Salesforce posed a steep learning curve and operational barriers.

Given the organization’s challenges, I decided to develop a custom solution tailored to their specific needs. This program aims to streamline data collection, ensure consistency in the information gathered, and facilitate easy updates and management of participant data. By providing a user-friendly and efficient system, the organization can better understand and serve their participants, ultimately enhancing their impact.

## Author

Zhihang Cheng

## Features

- **User-Friendly Interface**: Designed for simplicity and ease of use, requiring no prior technical knowledge.
- **Mobile Responsive**: Accessible via any personal electronic device, allowing data management on the go.
- **Data Integrity**: Guarantees that all inputted data follows a uniform format, ensuring comprehensive data capture necessary for subsequent analysis.
- **Expandable**: Built with scalability in mind, ready to include additional features such as AI analytics and data visualization tools.
- **Single Page Application**: This project is a SPA, offering faster load times and a seamless user experience without page reloads.


## Technical Stack

- **Frontend**: Developed using React, providing a dynamic and responsive user interface.
- **Backend**: Node.js with Express framework, handling API requests and serving the frontend.
- **Database**: MongoDB, chosen for its flexibility with document schemas which is ideal for diverse data collection needs.
- **State Management**: Uses React Context API for state management across different components without prop drilling.
- **Styling**: CSS and Material-UI for layout and design to enhance usability and aesthetic appeal.

## Project Structure

### Backend
- `config/`: Contains configurations like database connections.
- `controllers/`: Contains logic to handle participant data.
- `middleware/`: Contains middleware for error handling, logging, and 404 errors.
- `models/`: Contains data models, specifically the Participant model.
- `routes/`: Contains route definitions.
- `server.js`: Entry point for the server.
- `package.json`, `package-lock.json`: NPM configuration files.
- `.env`: Environment variables file.

### Frontend
- `public/`: Contains public assets and the manifest file.
- `src/`: Contains all the source files.
  - `components/`: Reusable React components like forms and buttons.
  - `services/`: API services that interact with the backend.
  - `hooks/`: Custom React hooks, like useForm.
  - `pages/`: React components that correspond to routes.
    - `LoginPage.js`: Handles user login.
    - `RegisterPage.js`: Handles user registration.
    - `HomePage.js`: Main landing page after login.
    - `AddParticipantPage.js`: Form for adding new participants.
    - `ManageParticipantsPage.js`: Displays a table of all participants with options to edit or delete.
    - `EditParticipantPage.js`: Form for editing existing participant information.
  - `App.js`, `index.js`: Entry points for React application.
  - `App.css`, `index.css`: CSS files for styling the application.

## Authentication
The application includes a basic authentication system:
- **Login**: Users can log in with their email and password to access the main dashboard and participant management features.
- **Register**: New users can register an account with a username, email, and password.
- **Protected Routes**: Access to the main dashboard and participant management pages is restricted to authenticated users only.

## Setup Instructions
  1. Clone the repository: `git clone https://github.com/czhtoday/UpliftNW_Participant_Manager.git`
  2. Install dependencies for the backend: 
    `cd backend`
    `npm install`
  3. Install dependencies for the front: 
    `cd frontend`
    `npm install`
  4. Install MongoDB, Follow the MongoDB official installation guide for your operating system: https://www.mongodb.com/try/download/community
  5. Start MongoDB server: `mongod`
  6. Create a .env file in the 'backend' directory of the project and add the following content:
    `PORT=8080`
    `MONGO_URI=mongodb://127.0.0.1:27017/your-database-name`
  7. Start the frontend server in the frontend directory: `npm start`
  8. Start the backend server in the backend directory: `npm start`
  9. Navigate to `http://localhost:3000` in your web browser.

## Future Enhancements

- **Integration with Data Platforms**: Further development to integrate with platforms like Salesforce.
- **AI Analytics and Data Visualization**: Incorporate AI-driven analytics and graphical data visualizations.