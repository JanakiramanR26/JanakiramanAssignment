
function day(time){
    switch(time){
       case 1:
           return "time is 1 o clock";
        case 2:
           return "time is 2 o clock";
       case 3:
           return "time is 3 o clock";
       case 4:
           return "time is 4 o clock";
       case 5:
           return "time is 5 o clock";
       case 6:
           return "time is 6 o clock";
       default:
           return "there or no value";
    }
   }
    let time = day(3);
    console.log(time);
    