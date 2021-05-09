Date use here is a JSON file (student.json)

start the server using command  - 

1.npm run dev

search the student record using the search keyword as ID.
eg - 

http://localhost:5000/1  
response - 
[{"id":1,"name":"RAM"}]



http://localhost:5000/5
response - 
[{"id":5,"name":"Ali"}]


if no data is present for the key then  - 

http://localhost:5000/10
response - 
No data found for given id