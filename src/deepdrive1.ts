// 型推論してエラーになる。
// var foo = 123;
// foo = '423'

interface Point2D {
    x: number;
    y: number;
};

interface Point3D {
    x: number;
    y: number;
    z: number;
};

var point2D: Point2D = { x: 10, y: 10 };
var point3D: Point3D = { x: 10, y: 10, z: 20 };

function iTakePoint2D(point: Point2D) {};

iTakePoint2D(point2D);
iTakePoint2D(point3D); // 追加のプロパティがあっても問題なし
// iTakePoint2D({ x: 0 });

declare var $: {
    (selector: string): any;
}
$('.awesome').show();
// $(123).show();

function foo(arg: string | null | undefined) {
    if(arg != null) {
        // `!=`がnullとundefinedを除外しているので、引数argは文字列です。
        console.log(arg.toUpperCase);
    }
}

// TypeScriptでは値と構造を分離してドキュメントのようにわかりやすくすることができます。下記のようなコードを想像してください

function foo1() {
    const flg : boolean = true;
    if (flg) {
        return {a:1, b:2};
    } else {
        return {a:1,b:undefined};
    }
}

// これは、次のように型アノテーションを使用すべきです。↓

function foo2() : {a:number,b?:number}{
    const flg : boolean = true;
    if (flg) {
        return {a:1, b:2};
    } else {
        return {a:1};
    }
}