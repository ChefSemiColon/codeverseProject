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
