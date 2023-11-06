# Task Manager

This is a simple To-Do app built with TypeScript, React, and Tailwind CSS. It allows users to create, manage, and track their tasks in an organized manner. This README will guide you through setting up and running the app on your local machine.
## Table of Contents

   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Usage](#usage)
   - [Project Structure](#project-structure)
    
    

## Prerequisites

Before you begin, ensure you have met the following requirements:

   - Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from [nodejs.org](https://nodejs.org).

## Installation

   - Clone this repository to your local machine using your preferred method (e.g., GitHub Desktop, command line, or a ZIP download).


`git clone https://github.com/paulwilsonr/todoPage.git`

   Navigate to the project directory.

`cd todoPage`

   Install the project dependencies using npm.


`npm install`

### Usage

   - After installing the dependencies, you can start the development server by running the following command:


`npm run dev`

This will start the development server and open the app in your default web browser.

   You can now interact with the To-Do app. Add new tasks, mark them as completed, and delete tasks as needed.

   To build the production version of the app, use the following command:


`npm run build`

This will create an optimized and minified build of the app in the build directory.

## Project Structure

The project structure is organized as follows:

   - src/: Contains the source code for the React app.
         - components/: Reusable React components.
         - App.tsx: The main application component.
        - index.tsx: The entry point of the application.
    - public/: Static assets and the index.html file.
    - tailwind.config.js: Tailwind CSS configuration file.
    - tsconfig.json: TypeScript configuration file.
    - package.json: Node.js package information and dependencies.
    - README.md: This documentation file.
