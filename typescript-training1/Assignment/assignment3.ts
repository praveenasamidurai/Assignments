let studentsName:string[] = ["Suresh","Mahesh","Naresh"];
let studentsmark:number[] = [75, 80, 82];
let bonusmark:number[] = studentsmark.map(studentmark=>studentmark+10);

function addmarks(studentsmark:number[]): void{
let bonusmark : number[]= studentsmark.map(studentsmark=>studentsmark+10);
console.log("Bonus mark:"+bonusmark);
}

function avgmarks(bonusmark:number[]): number{
let sum:number =0;
for(let i:number =0; i<bonusmark.length; i++){
     sum +=bonusmark[i]!;
}

let average= sum/bonusmark.length;
return average;
//console.log(sum);
}

addmarks(studentsmark);
console.log ("Average mark:"+avgmarks(bonusmark));
