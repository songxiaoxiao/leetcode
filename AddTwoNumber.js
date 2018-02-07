


//var addTwoNumbers = function(l1, l2) {
//    l1 = parseFloat( l1.reverse().join(''));
//    l2 = parseFloat( l2.reverse().join(''));
//    console.log(parseInt(1.2));
//    var result;
//    result = l1 + l2;
//    console.log(result);
//    return result.toString().split('');
//};



var addTwoNumbers = function(l1, l2) {
    console.log(typeof l1);
    var result = [];

    for(var i = l1.length - 1; i >= 0; i--){

        result[l1.length - 1 - i] = l1[i] + l2[i];

        if(result[l1.length - 1 - i] > 9){

            l1[i-1] = l1[i-1] + parseInt(result[l1.length - 1 - i]/10);

            result[l1.length - 1 - i] = result[l1.length - 1 - i]%10;
        }

    }
    return result;
};
