function runAfterDelay(fn, delay) {
    setTimeout(fn, delay);
}
function sayHello() {
    console.log("Hello Sunshine!");
}
runAfterDelay(sayHello, 2000); // it runs sayHello after 2000 milliseconds (2 seconds)