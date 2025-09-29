let x = 1;
function test() {
    console.log(x);
    let x = 2;
}
test();


function createSecret(secret) {
    return function() {
        return secret;
    };
}