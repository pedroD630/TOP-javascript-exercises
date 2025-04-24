const fibonacci = function(memberPos) {
    //memberPos is the index that contain the item in this implementation

    if (memberPos == 0) return 0;
    if (memberPos == 1) return 1;
    if (Math.sign(memberPos) == -1) return 'OOPS';

    var fibonacci = [0, 1];
    for(var i = 2; i <= memberPos; i++){
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    } 
    
    return fibonacci[memberPos];
};

// Do not edit below this line
module.exports = fibonacci;
