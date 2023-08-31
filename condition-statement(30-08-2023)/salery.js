let salery=65000;
if(salery>=80000&&salery<=100000){
    console.log("you are an A grade employee");
}
else if(salery>=60000&&salery<=79999){
    console.log("you are an B grade employee");
}
else if(salery>=40000&&salery<=59999){
    console.log("you are an C grade employee");
}

else if(salery>=20000&&salery<=39999){
    console.log("you are an D grade employee");
}

else if(salery>=10&&salery<=19000){
    console.log("you are an E grade employee");
}
else if(salery>100000){
    console.log("Error:!!your salery is over limited!!");
}
else{
    console.log(`print ${salery}`);
}

