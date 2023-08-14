# QuizQuest

![Quiz App Screenshot](/src/assets/Screenshot%20.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Components](#components)
- [State Management](#state-management)
- [API Endpoint](#api-endpoint)
- [Usage](#usage)


## Introduction

The Quiz App is built using React and leverages the power of the `useReducer` hook for efficient state management. It consists of various components that work together to create an interactive quiz experience. Users can answer a series of questions within a time limit and earn points based on their correct answers.

The `useReducer` hook enables the app to manage complex state transitions and actions seamlessly. Each action, such as fetching data, starting the quiz, answering questions, and finishing the quiz, is handled through the reducer function, providing a clear and structured approach to state management.

## Features

- Interactive quiz experience with timer and progress tracking.
- Fetches questions from an API endpoint using JSON Server.
- Displays loading and error states during data fetching.
- Presents a start screen, question screens, and an end screen based on the quiz status.
- Calculates and displays user's score and high score.
- Supports navigation between questions and provides feedback on correct answers.
- Responsive design for various screen sizes.

## Getting Started

To run the Quiz App locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory using your terminal.
3. Run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and visit `http://localhost:3000` to access the Quiz App.

## Folder Structure

The app's folder structure is organized as follows:

```
/src
|-- components        # Reusable React components
|-- App.js            # Main application component
|-- index.js          # Entry point
|-- ...
```

## Components

- `Header`: Displays the app header.
- `Loader`: Shows a loading animation when data is being fetched.
- `Error`: Displays an error message if data fetching fails.
- `MainBody`: Wraps the main content of the app.
- `StartScreen`: Displays the start screen with the number of questions and a start button.
- `Question`: Displays a single question and handles user answers.
- `NextBtn`: Displays the "Next" button to navigate between questions.
- `Progress`: Displays the current question number and the user's progress.
- `EndScreen`: Shows the user's score, max possible points, and high score at the end of the quiz.
- `Footer`: Displays the app footer.
- `Timer`: Renders a countdown timer during the active quiz.

## State Management

The app uses the `useReducer` hook for state management. The `reducer` function handles different actions such as fetching data, starting the quiz, answering questions, and finishing the quiz.

## API Endpoint

The app fetches questions from the API endpoint `http://localhost:8000/questions`. 

The Quiz App uses `json-server` package, which allows you to mock a simple REST API locally for development and testing purposes. This is particularly useful during the development phase, as it eliminates the need to connect to a real server or database.
## Usage

1. Upon loading, the app fetches questions from the API and displays a loading animation.
2. If the data fetch is successful, the app transitions to the start screen, displaying the number of questions and a start button.
3. Once the user clicks "Start," the timer starts, and questions are displayed one by one.
4. Users answer questions by selecting an option. Feedback is provided on correctness.
5. Users can navigate between questions using the "Next" button.
6. After all questions are answered or the timer runs out, the app displays the user's score, max possible points, and high score.

