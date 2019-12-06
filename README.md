# Welcome to my app.

This is a clone of HackerNews fetching the latest Node.js news.

React.js + Material UI + Styled-Components and Tachyons was used to build the 
frontend

Node.js + MongoDB was used for the backend while Mocha, Chai, and Supertest 
were used for the tests.

# Instructions

- Clone the repo to your local machine or server.
- Run docker-compose up --build from the root of the repo.
- Once in, visit localhost:90 or replace localhost for your server where you
are running the project.
- To force a data refresh, go to /create and go back to the home page.
- Feel free to delete posts and refresh to check if they were deleted.
- I used node-scheduler to run a function every hour that adds to the database
the latest posts from that hour. You can check if it is working on here:
http://64.225.46.95:90/


Extras:
-Docker uses a multi-stage build.