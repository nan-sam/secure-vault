/*
Declare welcome message variable and assign to the welcome phrase string. 

Declare 3 code variables

Declare variable one and assign to to the result of 2 operands and multiplication operator
Declare variable two and assign it to the result of 2 operands and addition operator
Declare variable three and assign it to the result of 2 operands and subtraction operator

Declare total code variable and assign it to concatenation of 3 previous codes, 
separated by spaces.
    
Create alert popup displaying concatenation of welcome string and total code string.  */

/* Welcome string*/
const welcomeStr = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

/* Code variables*/
const code1 = 2*5;
const code2 = 10+30;
const code3 = 30-9;
const totalCode = code1 + " " + code2 + " " + code3;


 /* Alert*/
alert(welcomeStr + " " + totalCode);
