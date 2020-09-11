//Question No.3
// Creat an array of object having the following properties
  // A.{name(string),age(number),country(string),hobbies array(string[])}.
 // B. Write a function to display all the object on the console.

// Question No.4
// Following the 3rd question
  // A. Write a function to display all the objects having age less then 30
  // B. Write a function to display all the objects having country India


const people = [
    { name : "Shiny",
       age : 30,
       country : "India",
        hobbies : ["Watching movies","eatting"]
},
{
    name : "Sharmila",
    age : 18,
    country : "England",
     hobbies : ["sleeping","playing"]
},
{
    name : "Sai Kiran",
    age : 30,
    country : "India",
     hobbies : ["Hardworker","Developer"]
}   ];
console.log(people);
// only those with age less then 30
console.log(people.filter(p =>p.age<30));
// only those with country India.
console.log(people.filter(p =>p.country === "India"));