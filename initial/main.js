function makeAdder(x) {



    function add(y) {
        return y + x;
    };

    return add;
}

var fn = makeAdder(5);

fn(10);















// function foo() {
//     var a = 1;

//     function bar() {
//         var b = 2;

//         function baz() {
//             var c = 3;

//             console.log( a, b, c ); 
//         }

//         baz();
//         console.log( a, b );
//     }

//     bar();
//     console.log( a );
// }

// foo();