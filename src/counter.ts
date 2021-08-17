function createCoounter() {
    let val = 0;
    // 関数をreturnする
    return {
        increment() { val++ },
        getVal() { return val }
    }
}

let counter = createCoounter();
counter.increment();
console.log(counter.getVal()); // 1
counter.increment();
console.log(counter.getVal()); // 2