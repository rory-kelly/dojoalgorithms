
  for(var i = 0; i <= 2017; i++){
    if(i % 400 === 0){
      console.log(i + " - Leap Year!");
      continue;
    }
    if(i % 100 === 0){
      console.log(i + " - it's not a leap year!");
      continue;
    }
    if(i % 4 === 0){
      console.log(i + " - Leap Year!");
    }
  }
