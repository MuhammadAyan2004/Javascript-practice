// let user = {
//     fName: "Muhammad",
//     lName: "Ayan",
//     welcomeMessage(){
//         console.log(`${this.lName} , welcome to the website`);
//         // console.log(this);
        
//     }
// }

// user.welcomeMessage();
// user.lName = "usamn";
// user.welcomeMessage();

// console.log(this);

const sol=()=>{
    let username ={
        name: "ayan",
        print(){
             console.log(this.name);
        }
    }
    username.print()

}
sol();