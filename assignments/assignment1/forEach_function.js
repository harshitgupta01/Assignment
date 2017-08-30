function map(item , second){
    var i=0;
    while(i<item.length)
    {
        var d = second(item[i]);
        console.log(d);
        i = i + 1;
    }
}

var b = function second(item){
    return item * item;
}
map([1,2,3,4],b);