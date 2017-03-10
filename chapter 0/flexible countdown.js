function flexible(lowNum, highNum, mult) {
  for(var i = highNum; i > 0; i--){
    if(i % mult === 0){
      if(i < lowNum){
        break;
      }
      else if(i > highNum){
        break;
      }
      else {
        console.log(i);
      }
    }
  }
}

//tests:
flexible(2,9,3);
flexible(5,21,4);
flexible(1,17,6);
flexible(3,10,2);
