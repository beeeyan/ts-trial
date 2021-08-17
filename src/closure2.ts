function outerFunction(arg) {
    var variableInOuterFunction = arg;
    return function() {
        console.log(variableInOuterFunction);
    }
}

var innerFunction = outerFunction("hello closure!");

// outerFunctionが返しているものに注意してください。
innerFunction(); // "hello closure!"と出力されます。