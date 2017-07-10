// 高階関数
function myHigherFunction () {
    console.log ('myHigherFunction');

    return outsideFunction;
}

// （普通の）関数
function outsideFunction () {
    console.log ('outsideFunction');
}

let returnValue = myHigherFunction ();
returnValue();