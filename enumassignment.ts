enum Environment
{
    LOCAL, 
    DEVELOPMENT,
    STAGING,
    PRODUCTION
}
function runTests(environment:Environment)
{
    console.log("tests are running in",environment)
}
runTests(Environment.LOCAL)
runTests(Environment.DEVELOPMENT)
runTests(Environment.STAGING)
runTests(Environment.PRODUCTION)