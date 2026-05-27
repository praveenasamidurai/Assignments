let customerName:string = "John Doe";
let creditScore: number = 720;
let income: number = 55000.0;
let isEmployed: boolean = true;
let debtToIncomeRatio:number = 35.0;

if (creditScore >750)
{
console.log("Loan is Approved"); 
}
else if (creditScore <= 750 && creditScore >= 650)
{
if(income>=50000)
{
    if(isEmployed==true)
    {
        if(debtToIncomeRatio<40)
        {
            console.log("Loan is Approved"); 
        }
        else
            console.log("Loan is denied"); 
    }
    else
        console.log("Loan is denied"); 
} else
    console.log("Loan is denied");    
}
else if (creditScore < 650)
{
    console.log("Loan is denied");
}
   