

function launchBrowser(browserName){
if(browserName==='Chrome'){
    console.log("Chrome browser is selected");
}else if(browserName==='Edge'){
    console.log("Edge browser is selected");

}else{
    console.log("Other browser is selected");

}
}

function runTests(testType){
switch (testType){
    case 'smoke':
        console.log("Smoke test running");
        break;
        
    case 'sanity':
        console.log("Sanity test is running");
        break;
        
    case 'regression':
        console.log("regression test is running");
        break;
    
    default:
      console.log("Running smoke tests");
      break;
}


}
launchBrowser('Chrome')

runTests('regression')