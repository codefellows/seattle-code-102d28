function getUserName(){
    let userName = prompt('Please Enter Your Name ');
    document.write(userName + '!')
    return userName;
}
// userName = 'Roger'
let userName = getUserName()
console.log(userName)
// console.log(getUserName())