console.log("Hello World from Nodejs")
const sum = (num1,num2) => console.log(num1+num2);
const pi  = 3.14;;
class SomeMathObject{
    constructor(){
        console.log('object created');
    }
}
// one way 
module.exports.sum =sum;
module.exports.pi =pi;
module.exports.SomeMathObject =SomeMathObject;
// second way
module.exports = {sum:sum,pi:pi,SomeMathObject:SomeMathObject};


