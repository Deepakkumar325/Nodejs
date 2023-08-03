// Event Module amd EventEmitter Class
const { deepEqual } = require('assert');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tut',()=>{
    console.log("tut even has occured")
})
eventEmitter.on('tut',(num1,num2)=>{
    console.log("tut even has occured", num1+num2)
})
// eventEmitter.emit('tut'cc)
eventEmitter.emit('tut',1,2)

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}
let deepak = new Person("deepak")// also create new person obj
deepak.on('name',()=>{
    console.log('my name is' + deepak.name);
})

deepak.emit('name');