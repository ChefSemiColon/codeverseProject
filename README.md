1. Create a database with the following attributes:<br />
    Username = postgres<br />
    password = postgres<br />
    database name = books<br />
    
  This can be done easily with docker with the following commands in the terminal:<br />
    docker pull postgres<br />
    docker run  --name postgresdb -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -d postgres<br />
    
  From here go into the docker container and run the following commands to create the database<br />
    su postgres<br />
    psql<br />
    CREATE DATABASE books;<br />
    
2. Import the project into your IDE

3. Run the WebsiteApplication in your IDE

6. Go to http://localhost:8080/ to view the application

Backend Progress
=====

With reguards to the backend progress several API's have been set up to allow for many functionalities, some of these API's would include:

1. /allbooks - Which returns a JSON file containing all the books in the database
2. /books - Which can be used to search for a book by title or author
3. /login - Which, while not using JWT tokens, can check if a user is in a database to log in.
4. /update - Which can be used to update a book 

While unfortunate I was unable to complete JWT Authentication due to multiple errors that occured

Frontend Progress
=====

Running the application Frontend 

-Install json server with the following command:
npm i json-server
-Run the following command to start the server:
json-server --port 8080/allbooks--watch db.json
-Once running, open another terminal and run npm start. This return all books in the database.

What the application can do so far:
1.Add and remove books from the basket.
-Limitation: when removing multiple item from the basket the remove button may remove multiple books and not a selected book.
This is something I am working on fixing
2.Display all the books from the database
3.Search for a specific book in the database 
4.Test the Header element with the command npm run test.

What the application cannot do yet:
1.Authenticate a user
-The Login is a work in progress. I am currently working on understanding concepts of authentication and authoristaion and the use of tokens.
