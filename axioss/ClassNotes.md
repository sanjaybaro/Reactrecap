1. Starting the json server

json-server --watch db.json --port 8080

2. Starting the project

a. on mount phase, get the data (use axios) and display the same

3. How response look like in axios:

a. it is coming as object with different key name
inside response we have the data res.data
b. here res is the object that we are getting from axios and to get the data as an value we have to
do res.data
c. we are getting response as an object here

4. optional chaining ?

it will check in the object whether the
key is present or not
like example: 
let res={have key called data}
console.log(res?.data)
here it will check res object with key called 
data

5. what in the session
a. useReducer and axios network request--> got the data and displayed the same.

b. pagination and sorting

6. common way of doing pagination and limit for json:
axios.get(`https://resturantapi-phez.onrender.com/restaurants?_page=${page}&_limit=${limit}`)

7. what we are implemented in the class:
-useReducer and axios. network req --> got the data and displayed the same.
-implement

  Pagination
   sorting
AddRestaurant.jsx
Create a form using useReducer hook;
Post request --> axios -- Post requ --> data base got updated --> get req --> fetchAndUpdateData ( get the latest data and display the same )
refactoring & Delete and Edit functionality

8. URL look like bewlo:
-https://resturantapi-phez.onrender.com/restaurants?_page=1&_limit=4&_sort=rating&_order=asc
