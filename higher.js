// 高階関数
function myHigherFunction () {
    console.log ('myHigherFunction');

    return outsideFunction;
}

// （普通の）関数
function outsideFunction (value) {
    console.log ('value :' + value);
}

// let returnValue = myHigherFunction ();
// returnValue ('引数だよ');
myHigherFunction () ('引数だよ');