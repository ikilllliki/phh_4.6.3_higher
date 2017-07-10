// 高階関数
function myHigherFunction (func) {
    console.log ('myHigherFunction');

    func ();
}

// （普通の）関数
function outsideFunction () {
    console.log ('outsideFunction');
}

// outsideFunction (); // 関数呼び出し

myHigherFunction (outsideFunction); // 関数渡し