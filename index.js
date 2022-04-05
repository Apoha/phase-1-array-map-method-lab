const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];




    function titleCased(){
      const tutoArr = tutorials.map(function(stringElement){
          const tutoReformed = stringElement.split(" ").map(function(stringArr){
              return stringArr.charAt(0).toUpperCase() + stringArr.slice(1)}).join(" ")
        
      return tutoReformed})
      
  
  return tutoArr };
  
  
  console.log(titleCased());   
  
  