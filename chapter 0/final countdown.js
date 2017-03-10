function final(param1,param2,param3,param4) {
  var i = param3;
  while(i >= param2){
    if(i % param1 === 0){
      if(i != param4){
        console.log(i);
      }
    }
  i--;
  }
}

//tests:
final(3, 5, 17, 9);
final(2,3,25,16);
