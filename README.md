README:

Vas2000 is a modern CMS sport fitness tracking app that is built for trainers
[N] = Mean ref to links that are attached to the end of the README. 

Personal trainer will register a trainee, build him a custom plan. After all the setup the trainer can create training sessions for trainees and input session data while the session is happening.. The state of the session is updated at runtime, when the session ends the trainee will be able to see a summary of his training session as well. In general the trainee will have acesss to his stats in another standalone fullstack app (quries the same DB)

The process of building the app.
A big goal of mine before building this app was to get familer with GraphQL, I really believed in the tech and wanted to try it myself.

 Before starting my project I made a 
documentation page on google docs to set my goals and understand what tasks I need to do[2]
Started off the projects DB using mongodb like an fool but then quickly realized that I should move to a relational database because all of my data is realtional, It was quite a challange to migrate because a lot of my business logic was written with mongoose, including all the graphql resolvers, although a challange It was important for me to make the change, also because in the real world migrating to different types of DB's can certainly happen  I chose to go with postgres because I had some familiarity with SQL and wanted to learn something new, I haven't used SQL query launguage in a while and I was tempted to use a ORM for PG but then I came across this articlep[1] and decided to write RAW SQL queires instead.
Getting used to writing queires wasn't all that hard, getting it to work with the Auth BL was a bit tricky but I managed to make it work. Currently running my postgres server in a docker which was a whole 2 day episode the tech, love the fact that each container has its own filesystem very cool. anyway hopefully this doccumantion will get a proper update because it's a bit rough currently as you have read. I am going to go back to actaully working on the project
cheeers

* Features *
* Add trainees to the system
* Build a custom plan with many exercises. 
* Keep track of all of the trainees sessions
