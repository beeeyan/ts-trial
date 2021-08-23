var foo = {};

// foo を設定します foo.__proto__も同様です
foo.bar = 123;
foo.__proto__.bar = 456;

console.log(foo.bar); // 123
delete foo.bar; // オブジェクトから削除
console.log(foo.bar); // 456
delete foo.__proto__.bar; // foo.__proto__から削除します
console.log(foo.bar); // undefind