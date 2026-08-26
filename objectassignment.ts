let TestExecutionSummary:{
    totalTestspassed: number,
    Testsfailed: number,
    TestsexecutionTime:number

}={
   totalTestspassed:50,
   Testsfailed:5,
   TestsexecutionTime:5

};
let testExecutionStatus=TestExecutionSummary.totalTestspassed-TestExecutionSummary.Testsfailed;
console.log(TestExecutionSummary.totalTestspassed);
console.log(TestExecutionSummary.Testsfailed);
console.log(testExecutionStatus);

if(TestExecutionSummary.Testsfailed==0)
{
    console.log("Execution Successful.");
    
}
else
{
 console.log("Execution Completed with Failures=" + TestExecutionSummary.Testsfailed);
 
}