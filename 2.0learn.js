function abcd(){
    console.log('normal function')
}
var abcd =function temp()
{
    console.log('function expression')
}
var abcd =function(){
    console.log('anonimous function expression')
}
var abcd =()=>{
    return 'abcd'
}
var abcd=()=>('abcd')
var abcd=number=>(number)
var abcd=number=>number
abcd(10)
// ( function()
// {
//     console.log('anonimous normal IIFE')
// })()
function abcd(){
console.log('function dedee')
}