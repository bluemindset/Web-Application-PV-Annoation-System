# CS 425: Implementation of a PV Annoation System 

## Front End
1. Login Form with Security
2. Responsive Map with markers.
3. Bootstrap

## Back End
1. Every Panel information is stored inside MYSQL including images 
with type blob.
2. Insert , Update , Delete , Read are done using AJAX 
3. PHP Rest API using PHP Data Objects (PDO) such as Panel,Database and User Objects.

## Authentication
The user enter its credentials inside the form.
Then his password is hashed and from the database we select 
the current user with the username and check his password if it is
correct with the correct hash using password_verify function of php
inside the passevaluate.php as we saw in class.Also we check the number of time the user 
has tried to enter using PHP Session.

### Stefanos Ioannou 
### Charalambos Theodorou
### Team11
