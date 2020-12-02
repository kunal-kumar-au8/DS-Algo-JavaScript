// Recurtion
function countDown(num){
    if(num <= 0){            // Base case
        console.log("All done");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(5)

// Regular Function.

// function countDown(num){
//     for (var i=num; i>0; i--){
//         console.log(i)
//     }
// }
// countDown(5)