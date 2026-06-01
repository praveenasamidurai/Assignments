let transactionAmt:number[] = [50000,-2000,3000,-15000.-200,-300,4000,-3000];

let totalCredits :number=0;
let totalDebits :number=0;
let totalCreditAmount : number =0;
let totalDebitAmount : number =0;
let suspicious: number =0;

for(let amount of transactionAmt)
{
    if(amount>0){
        totalCreditAmount += amount;
        totalCredits++;

    if(amount>10000){
        console.log(`Suspicious transaction with credit : ${amount}`)
        suspicious++;
    }
else{
    totalDebits++;
    totalDebitAmount -= amount;

      if(amount<-10000){
        console.log(`Suspicious transaction with debit : ${amount}`)
        suspicious++;
    }
    }
    }
}

        let Balance: number = totalCreditAmount - totalDebitAmount;

        console.log("Total number of credit transactions:", totalCredits);
        console.log("Total number of debit transactions:", totalDebits);
        console.log("Total amount credited:", totalCreditAmount);
        console.log("Total amount debited:", totalDebitAmount);
        console.log("Final remaining amount in the account:", Balance);
        console.log("Total number of suspicious transactions:", suspicious);