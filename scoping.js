const browserVersion='chrome';
function getBrowserVersion(){
    if(browserVersion=='chrome')
    {
       let browserVersion='edge';
       console.log( "inside the block ", browserVersion); 
        
    }

console.log("outside the block" ,browserVersion);

}
getBrowserVersion()

