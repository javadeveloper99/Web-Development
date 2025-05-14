let option = prompt("Select operation:\n1. Basic Arithmetic (+,-,*,%)\n2. Currency Conversion (Dollar to Rupee or Rupee to Dollar)\n3. Weight Conversion (Kg to Gram)\n4. Temperature Conversion (Celsius to fahrenheit)\nEnter choice (1/2/3/4):")

switch(option){
  case '1':
    let num1=parseFloat(prompt("Enter the first number"));
    let num2=parseFloat(prompt("Enter the second number"));
    let operation =prompt("Enter operation => +,*,*,/")

    let result ;

    if(operation === '+') result=num1+num2;
    else if(operation === '-') result=num1-num2;
    else if(operation === '/') result=num1/num2;
    else if(operation === '*') result=num1*num2;
    else result="Invalid operation"

    alert("Result :"+result);
    break;
  case '2':
    let currencyC=prompt("Enter 1 to convert dollar to Rupee or '2' to convert Rupee to Dollar");
    let amount= parseFloat(prompt("Enter the amount:"))

    let exchangeRate=85.43;

    if(currencyC=='1'){
      let result=amount*exchangeRate;
      alert("Result = "+result+"Rupees")
    }else if(currencyC=='2'){
      let result=amount/exchangeRate;
      alert("Result = "+result+"Dollars")
   }else{
    alert("Invalid currency choice")
   }
   break;

  case '3':
    let kg=parseFloat(prompt("Enter the weight in kg"))
    alert("Result "+(kg*1000)+"grams")
    break;

  case '4':
    let cs=parseFloat(prompt("Enter the temperature in Celsius"))
    let fahrenheit=(cs)*(9/5)+32;
    alert("Result "+fahrenheit+"fahrenheit");
    break;
  default:
    alert("Invalid choice")

}