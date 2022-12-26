function auto(){
    inner();
    function inner(){
        console.log(b);
    }
}

var b = 10;
auto();
console.log(b);