// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  const saturdayFunResult = saturdayFun();
console.log(saturdayFunResult); // Output: "This Saturday, I want to roller-skate!"

const mondayWorkResult = mondayWork();
console.log(mondayWorkResult); // Output: "This Monday, I will go to the office."

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); // Output: "You are !!!a dedicated programmer!!!"

const anotherEncouragingPromptFunction = wrapAdjective("%");
console.log(anotherEncouragingPromptFunction("a skilled artist")); // Output: "You are %a skilled artist%!"

