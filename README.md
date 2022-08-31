# FSJS-6-Node-Express-Site

## Description

For this project, I will be creating a gorgeous portfolio site to showcase the great projects I've built. The site will contain a mondern landing page, an about page and a series of project pages to show off and detail at my first five projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [How to run the project](#how-to-run-the-project)
  - [Style Updates](#style-updates)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

In this project, I have created a JSON file to store all of my projects object informations.

I also used Pug to complete provided templates that utilize the JSON to generate the markup that is ultimately displayed in the browser.

I used Pug Templates, Node.js and Express to:

- Used `npm start` to start the server
- Import the required dependencies
- Link the JSON with the Pug templates
- Set up routes to handle requests
- Set up the middleware to utilize static files like CSS and Images
- Handle errors (404's, 500's)
- Set up a Express Server to serve the project

### Links

- Live Site URL: [Express and Nodejs Portfolio hosted by Netlify](https://typeerrordev-express-portfolio.netlify.app/)

## My process

### Built with

- [Javascript](https://262.ecma-international.org/13.0/#sec-intro) - ES6
- [Node.js](https://nodejs.org/en/) - v18.7.0
- [Express](https://expressjs.com/) - ^4.18.1
- [Pug](https://pugjs.org/) - ^3.0.2
- [Body-Parser](https://www.npmjs.com/package/body-parser) - ^1.20.0
- [Nodemon](https://www.npmjs.com/package/nodemon) - ^2.0./19

### How to run the project

- npm install
- npm init -y
- npm install -g nodemon
- npm install -g pug
- npm install -g body-parser
- npm install -g express
- npm start

### Style Updates

- Added custom CSS to the Error handling routes
- Modified the image sizes to ensure they are aligned correctly
- Added an Avatar image
- Added box shadows to the Error information
- Added transition and transform effects to the project cards

### What I learned

- I learned how to use the Pug Template Engine to generate the markup for the site
- I learned how to use the Express Server to serve the site
- I learned how to use the Body Parser to parse the request body
- I learned how to use the Nodemon to restart the server when changes are made to the project
- I learned how to use the Node.js Error Handling middleware to handle errors
- I learned how to use the Node.js Static Middleware to serve static files like CSS and Images

## Author

- Portfolio - [www.MatthewPantel.com](https://www.matthewpantel.com)
- LinkedIn - [@MatthewPantel](https://www.linkedin.com/in/MatthewPantel)
- Twitter - [@TypeErrorDev](https://www.twitter.com/TypeErrorDev)

## Acknowledgments

I'd like to give thanks to the Student Success Mentors with Team Treehouse, the other students in their Slack channel and my friends on Discord that helped me along the way. Without everyone's support, I'd still be figuring out how to center a <div>

Finally, I'd like to acknowledge Voice Chat 3 in #100Devs for assisting me with the project.
