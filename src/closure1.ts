function outerFunction(arg) {
    var variableInOuterFunction = arg;

    function bar() {
        console.log(variableInOuterFunction); // 外側のスコープにある変数にアクセスします
    }

    // argにアクセスできることを示すために、ローカル変数を呼び出します。
    bar();
}

outerFunction("hello closure"); // "hello closure"とログに出力されます。