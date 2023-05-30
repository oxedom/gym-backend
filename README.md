# CMS Sport Fitness Tracking App Built for Trainers

The personal trainer will register a trainee and create a custom plan for them. Once the setup is complete, the trainer can create training sessions for the trainees and input session data in real-time. The session's status is updated during the session, and when it ends, the trainee will be able to view a summary of their training session. In general, the trainee will have access to their statistics in another standalone full-stack app that queries the same database.

The Process of Building the App

One of my main goals before starting this app was to become familiar with GraphQL. 

Before starting the project, I created a documentation page on Google Docs to set my goals and understand the tasks I needed to accomplish.

I began by setting up the project's database using MongoDB, but quickly realized that I should switch to a relational database because all of my data was relational. Migrating to a relational database was quite a challenge since much of my business logic was written with Mongoose, including all the GraphQL resolvers. However, it was important for me to make this change because in the real world, migrating to different types of databases can certainly happen. I chose to use PostgreSQL because I had some familiarity with SQL and wanted to learn something new. Although I hadn't used the SQL query language in a while and was tempted to use an ORM for PostgreSQL, I came across this article [1] and decided to write raw SQL queries instead.

Currently, I'm running my PostgreSQL server in a Docker container, which took me about two days to set up. I love the fact that each container has its 

## Features:
* Add trainees to the system
* Create a custom plan with multiple exercises
* Track all training sessions for the trainees
