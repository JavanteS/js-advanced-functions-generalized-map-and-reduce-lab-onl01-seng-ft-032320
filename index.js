// Add your functions here
function map(arg, cb){
    let arr = []
    for(let i=0; i<arg.length; i++){
        arr.push(cb(arg[i]))
    }
    return arr
}