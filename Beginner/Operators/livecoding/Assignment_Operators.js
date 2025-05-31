// ! Assign variables to variables

let number = 7890
console.log(number)



number += 7
console.log(number)



number -= 7
console.log(number) 



number *= 7
console.log(number)



number /= 7
console.log(number)



number %= 7
console.log(number)



number **= 7
console.log(number)



number <<= 7 // ? Letf shift operator
// * It Multiply the number times 2^n where n is the magnitude of the shift 
// * Here in this case n = 7
// * number has value 1 before left shift after left shift number = 1 * 128 [2^7 = 128]
console.log(number)

// ! What if the number is negative 
number = 1
console.log(number << -3)
// ? what here really happened is -3 & 0x1F = 29
/*
!    11111111 11111111 11111111 11111101  // -3
!                    &
!    00000000 00000000 00000000 00011111  // 31 (0x1F)
!                    =
!    00000000 00000000 00000000 00011101  // 29
*/
// ! Then number << 29 = 1 * 2^29


number = 1
number >>= 7 // ? Right Shift operator 
// * It Divides the number by 2^n where n is the magnitude of the shift 
// * Here in this case n = 7
// * number has value 128 before right shift after right shift number = 128 / 128 [2^7 = 128]
console.log(number)

// ! for The same negative character example 
// ! number >> -3 
// ! Then number >> 29 = 1 / 2^29

console.log(128 >>> 7) // ! It Works Same As Right Shift Operator 

number = 1
console.log(number & 0xF) // ? It Works Same As the Above Example Bitwise AND Operator 

number = 1
console.log(number ^ 3) // ? It Works Same As the Above Example Bitwise XOR Operator 