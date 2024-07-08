// code your solution here
//function: saturdayFun
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
//function: mondayWork
function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}
//function: wrapAdjective
function wrapAdjective(flair="*") {
    return function(adjective="beautiful") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}
// Example usage of wrapAdjective
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction());
console.log(encouragingPromptFunction("awesome")); 

// Example usage of saturdayFun and mondayWork
console.log(saturdayFun());
console.log(saturdayFun("play chess")); 

console.log(mondayWork()); 
console.log(mondayWork("go to school"));
    
    

