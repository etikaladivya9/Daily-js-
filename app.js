console.log("hello world")

var a=10;
     //  Function-scoped
     //  Can be redeclared and updated


  let b=20;
  //  Block-scoped ({ })
 //    Can be updated but not redeclared in the same scope
  const c=22;

       // Block-scoped
       // Cannot be reassigned 
      //  Must be initialized when declared
console.log(a);


//rules:
    //.variable names contain only letters (a-zA-Z) digits(0-9),_,$
    //.starts with letters and _ only.
    //case sensitive.
    // use calmel case (firstLastName)