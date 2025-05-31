// ! Explicit type conversion 
// ? It is Done By using some functions 

// * Converting one Datatype to numbers

let num_str = Number('')
let num_str1 = Number('Mukesh')
let num_str2 = Number('9863592772')
let num_boolean = Number(true)
let num_boolean1 = Number(false)
let num_null = Number(null)
let num_undefined = Number(undefined)
console.log(num_str) // * 0
console.log(num_str1) // * NaN
console.log(num_str2) // * 9863592772
console.log(num_boolean) // * 1
console.log(num_boolean1) // * 0
console.log(num_null) // * 0 
console.log(num_undefined) // * NaN

// * Converting onedatatype to String 

let str_num = String(7366)
let str_num1 = String(-74288)
let str_num2 = String(0)
let str_num3 = String(77.54237)
let str_boolean = String(true)
let str_boolean1 = String(false)
let str_null = String(null)
let str_undefined = String(undefined)
console.log(str_num)// * 7366
console.log(str_num1)// * -74288
console.log(str_num2) // * 0
console.log(str_num3)// * 77.54237
console.log(str_boolean)// *true
console.log(str_boolean1)// * false
console.log(str_null)// * null
console.log(str_undefined)// * undefined

// * Converting onedatatype to Boolean 

let bool_num = Boolean(766)
let bool_num1 = Boolean(-7348)
let bool_num2 = Boolean(0)
let bool_str = Boolean('Mukesh')
let bool_str1 = Boolean('')
let bool_null = Boolean(null)
let bool_undefined = Boolean(undefined)
console.log(bool_num)// * true
console.log(bool_num1)// * true
console.log(bool_num2)// *false 
console.log(bool_str)// * true
console.log(bool_str1)// * false 
console.log(bool_null)// * false 
console.log(bool_undefined)// * false 



// ! Implict type conversion does not require using of functions 
// ? JS will automatrically convert 

let implict = 5 + '789'
console.log(implict,typeof implict) // * 5789 string 