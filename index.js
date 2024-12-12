function outerFunction() {
    let message = "Diwakar kumar";
    function innerFunction() {
        console.log(message); 
    }
    return innerFunction; 
}
const storedFunction = outerFunction(); 
storedFunction();
