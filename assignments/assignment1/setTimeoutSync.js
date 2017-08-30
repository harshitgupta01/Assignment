var prev = new Date();
console.log(prev);
function SetTimeoutSync(n,fun1) {
    while (new Date() - prev < n) {
    }
    fun1();
}
function fun1(){
    console.log("hi");
}
SetTimeoutSync(4000,fun1);