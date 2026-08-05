function runTests(testType)
{
switch(testType)
{
    case 'smoke':
        console.log("Executing smoke testing");
        break;
    case 'sanity':
        console.log("Executing sanity testing");
        break;
    case 'regression':
        console.log("Executing regression testing");
        break;
    default :
        console.log("Executing smoke testing");
        break;
          

}
}
runTests('regression');