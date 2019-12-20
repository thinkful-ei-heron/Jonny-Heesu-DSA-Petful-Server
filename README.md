#  FIFO Pet Adaption Agency API

The Api has a few different routes to allow users to view current animals that are up for adoption.


## Developed By Jonny Deates & Heesu Kang


### /api/users 
Gets all of the current users in line waiting to view the adoption list. 
### /api/users/line 
Moves the line to the next person who is waiting
Also returns the person who just left the line and an updated array of the users.
### /api/users/:id
Gets a users by their specific Id
### /api/cats
Gets all cats on the adoption site
return it as a JSON array
### /api/cats/:id
Gets a single cat on the adoption site
returns it as an JSON Object
### /api/dogs
Gets all cats on the adoption site
return it as a JSON array
### /api/dogs/:id
Gets a single cat on the adoption site
returns it as an JSON Object
