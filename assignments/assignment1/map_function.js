function map(item , second){
    var i=0;
    var arr = [];
    while(i<item.length)
    {
        var d = second(item[i]);
        arr.push(d);
        i=i+1;
    }
    return arr;
}

var b = function second(item){
    return item * item;
}
console.log(map([1,2,3,4],b));