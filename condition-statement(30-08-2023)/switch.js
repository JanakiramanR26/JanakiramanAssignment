var role="maintance";
switch(role){
    case "manager":
        console.log("you are manager");
        break;
        case "tearmleader":
        console.log("you are teamleader");
        break;
        case "developer":
        console.log("you are developer");
        break;
        case "tester":
        console.log("you are tester");
        break;
        case "support":
        console.log("you are supporter");
        break;
        default:{
            console.log(`this is defalut value = ${role}`);
        }

}