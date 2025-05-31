    // * A Variable in JavaScript is stored using let,var and const keywords

    let name_var  // ! This is called variable deceleration 

    // ! you can assign values to the variables by using the = also known as assignment operator 

    name_var = 'string is assigned to the name_var variable'

    console.log(name_var)

    /* 
        EveryThing can be done in one line let name_var = 'string is assigned to the name_var variable
    */

    let number_var = 10
    console.log(number_var)

    // ! you can use var to declare a variable and initilize it but the main 
    // ! difference b/w var and let is 
    // ! you can redeclare var variables but not let 
    var a = 10
    var a = 20
    console.log(a) // * The output would be 20 but not 10 

    let Is_true = false
    console.log(Is_true)

    // ! A Variable Declared const keyword will have a constant value but not a variable value 

    const pi = 22/7
    // ? Rules for writing a variable

    /*
        *Varibales in JS are case sensitive 
        *cannot begin with symobls or number except for _ and $ 
        *only _ and $ can be used no other special character 
        *cannot use a reversed keyword as a variable name 
        *numbers can be used but not a the start of the variable name but can be used after a letter 
    */