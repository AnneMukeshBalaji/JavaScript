                        // * alert() methods is used to do pop ups in the htmls page 
                        // * prompt() metnod is used to take value from user in a html page

alert('Enter The value of a ')
let a = prompt('Enter a here ')  // ! Takes Input From the User and it will be default string 
a = Number.parseInt(a)
document.writeln(`The Value of a : ${a} ,${typeof a}`)

//! Prompt Can Have a Default 
let num = Number.praseInt(prompt('Enter a number' ,'0')) /// * here 0 will be the default value 

// ! confirm returns true or false
if(window.confirm('Are You Sure')){
    document.writeln('true')
}
else{
    document.writeln('false')
}
