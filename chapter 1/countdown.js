var arr = [];

function countdown(num) {
    for(var i = num; i >=0; i--){
        arr.push(i);
    }
    console.log(arr);
    console.log(arr.length);
}
//test:
countdown(23);
