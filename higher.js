// // 高階関数
// function myHigherFunction (func) {
//     console.log ('myHigherFunction');

//     func ();
// }

// // （普通の）関数
// function outsideFunction () {
//     console.log ('outsideFunction');
// }

// // outsideFunction (); // 関数呼び出し

// myHigherFunction (outsideFunction); // 関数渡し


function arrayWalk(data,f) {
    for (var key in data) {
        f(data[key],key);
    }
}

// コールバック関数
function showElement(value,key) {
    console.log(key + ':' + value);
}

// コールバック関数
function showDecoratedElement (value,key) {
    // console.log ('キー(' + key + '):値(' + value + ')');
    console.log ('キー(' + key + '):値(' + value + ')');
}

var ary = [1,2,4,8,16];
ary.Walk (ary,showDecoratedElement);