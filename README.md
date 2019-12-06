# Welcome to my app.


## Demo http://64.225.46.95:90/
This is a clone of HackerNews fetching the latest Node.js news.

React.js + Material UI + Styled-Components and Tachyons was used to build the 
frontend.

Node.js + Express + MongoDB was used for the backend while Mocha, Chai, and 
Supertest were used for the tests.

The entire app is Dockerized and has React, Node.js and 
MongoDB running. Node.js serves the static production build from React.
The dockerized project can start with a simple docker-compose --up build.

# Instructions

- Clone the repo to your local machine or server.
- Run docker-compose up --build from the root of the repo.
- Once in, visit localhost:90 or replace localhost for your server where you
are running the project.
- To force a data refresh, go to /create and go back to the home page.
- Click on a row to visit the post story_url or url
- Feel free to delete posts and refresh to check if they were deleted.
- I used node-scheduler to run a function every hour that adds to the database
the latest posts from that hour. You can check if it is working on my dockerized
app running on the cloud here:
http://64.225.46.95:90/


# Extras:
- The client is compiled in a docker multi-stage build for production.