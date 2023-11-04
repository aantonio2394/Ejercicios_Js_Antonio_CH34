   
  

   let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

   //1.	Write a command that prints out all of the people in the list.
   
   //console.log(people);
   
   //2.	Write the command to remove "Dani" from the array
   const peopleCopy= people.slice();
   const deleted1 = peopleCopy.splice(1,1);
   console.log(people);
   console.log(peopleCopy);
   
   //3.	Write the command to remove "Juan" from the array.
   const peopleCopy2= people.slice();
   const deleted2 = peopleCopy2.splice(3,1);
   console.log(people);
   console.log(peopleCopy2);
   
   //4.	Write the command to move "Luis" to the front of the array.
   const peopleCopy3= people.slice();
   const deleted3 = peopleCopy3.splice(2,1);
   console.log(deleted3);
   peopleCopy3.unshift(deleted3);
   
   console.log(people);
   console.log(peopleCopy3);
   let people1 = ["Maria", "Dani", "Luis", "Juan", "Camila"];
   
   // Find the index of "Luis"
   const index = people1.indexOf("Luis");
   
   if (index !== -1) {
     // Remove "Luis" from the current position
     people1.splice(index, 1);
   
     // Insert "Luis" at the beginning of the array
     people1.unshift("Luis");
   }
   
   console.log(people1);
   //5.	Write the command to add your name to the end of the array.
   
   
   const peopleCopy4= people.slice();
   peopleCopy4.push(`antonio`);
   console.log(peopleCopy4);
   
   //6. Using a loop, iterate through this array and after console.log
   //"Maria", exit from the loop. (usar break)
   let people12 = ["Maria", "Dani", "Luis", "Juan", "Camila"];
   
   for (const person of people12) {
     console.log(person);
     if (person === "Maria") {
       break; // Exit the loop when "Maria" is encountered
     }
   }
   
   //7.	Write the command that gives the indexOf where "Maria" is located.
   const peopleCopy5= people.slice();
   console.log(peopleCopy5.indexOf("Maria"));