# local-library-express

## Info
This is a practice Node.js/Express, MongoDB server-side rendered app. 
Loosely based on this MDN tutorial:  
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website 

## Dev Instructions
To run the project locally, download the files.   
```
$ cd local-library-express
$ npm init
```
This will install all project dependency locally on your machine.  

To start the local server, you can either start the regular server included in Express: 
```
$ npm start
```
Or you can use nodemon (already configured) to avoid restarting the server every time a change is made (you still have to reload the page, there is not hot reloading): <br />
```
$ npm run serverstart
```

## DB
This app used to use a default MongoDB database hosted on Atlas.  This db has been now removed.  

## To-Do:
- install dotenv
- create local MongoDB db and connect to this project
- create endpoints to query data
- create views for different pages

