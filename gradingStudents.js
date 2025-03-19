function gradingStudents(grades) {
    // Write your code here


   let result = 0;

   for(let i = 0; i < grades.length; i++){
      result = grades[i] % 5;
      if(grades[i] < 38 || result < 3){
         grades[i];
      } else {
         grades[i] = grades[i] + (5 - result); 
      }
   }
   return grades;
}