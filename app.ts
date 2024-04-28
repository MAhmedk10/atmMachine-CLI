import inquirer from "inquirer";

let currentBalance: number = 10000;
let pinCode: number = 101323;

let accountHolder = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin number",
    type: "number",
  },
]);

if (accountHolder.pin === pinCode) {
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select one option",
      type: "list",
      choices: ["Withdraw Money", "Check Balance"],
    },
  ]);

  if (operationAns.operation === "Withdraw Money") {
    let withdrawAmount = await inquirer.prompt([
      {
        name: "amount",
        message: "Select Amount OR Enter amount",
        type: "list",
        choices: ["Select Amount", "Enter Amount"],
      },
    ]);

    if (withdrawAmount.amount === "Select Amount") {
      let selectAmount = await inquirer.prompt([
        {
          name: "selectamount",
          message: "Please select the Withdrawal amount",
          type: "list",
          choices: [
            "1000",
            "2000",
            "5000",
            "10000",
            "20000",
            "50000",
            "100000",
          ],
        },
      ]);
      if (selectAmount.selectamount === "1000") {
        if (selectAmount.selectamount <= currentBalance) {
          console.log(`Your remaining balance is ${currentBalance - 1000}`);
        } else {
          console.log("You have insufficient balance!");
        }
      } else if (selectAmount.selectamount === "2000") {
        if (selectAmount.selectamount <= currentBalance) {
          console.log(`Your remaining balance is ${currentBalance - 2000}`);
        } else {
          console.log("You have insufficient balance!");
        }
      } else if (selectAmount.selectamount === "5000") {
        if (currentBalance >= selectAmount.selectamount) {
          console.log(`Your remaining balance is ${currentBalance - 5000}`);
        } else {
          console.log("You have insufficient balance!");
        }
      } else if (selectAmount.selectamount === "10000") {
        if (currentBalance >= selectAmount.selectamount) {
          console.log(`Your remaining balance is ${currentBalance - 10000}`);
        } else {
          console.log("You have insufficient balance!");
        }
      } else if (selectAmount.selectamount === "20000") {
        if (currentBalance >= selectAmount.selectamount) {
          console.log(`Your remaining balance is ${currentBalance - 20000}`);
        } else {
          console.log("You have insufficient balance!");
        }
      } else if (selectAmount.selectamount === "50000") {
        if (currentBalance >= selectAmount.selectamount) {
          console.log(`Your remaining balance is ${currentBalance - 50000}`);
        } else {
          console.log("You have insufficient balance!");
        }
      } else if (selectAmount.selectamount === "100000") {
        if (currentBalance >= selectAmount.selectamount) {
          console.log(`Your remaining balance is ${currentBalance - 100000}`);
        } else {
          console.log("You have insufficient balance!");
        }
      }
    }

    if (withdrawAmount.amount === "Enter Amount") {
      let enterAmount = await inquirer.prompt([
        {
          name: "enteramount",
          message: "Please enter the Withdrawal amount",
          type: "number",
        },
      ]);
      if (enterAmount.enteramount <= currentBalance) {
        console.log(
          `Your remaining balance is ${(currentBalance -=
            enterAmount.enteramount)}`
        );
      } else if (enterAmount.amount.amount > currentBalance) {
        console.log(
          `You dont have enough balance in your account and your current balance is: ${currentBalance}`
        );
      }
    }
  } else if (operationAns.operation === "Check Balance") {
    console.log(`Your current balance is : ${currentBalance}`);
  }
} else {
  console.log("Incorrect pincode XXX");
}

// let afterOperation = await inquirer.prompt([{

// name:"finalBalance  OR EXIT",
// type:"list",
// choices:["Check Final Balance", "Exit"]
// }]);

// if(afterOperation.finalBalance === "Check Final Balance"){console.log(currentBalance)}
// else if(afterOperation.finalBalance === "Exit"){console.log("We hope you liked our service, Thanks for coming!")};
