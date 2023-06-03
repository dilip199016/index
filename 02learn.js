var sample = () => {
    return 'sample';
  }
  
  function abcd() {
    console.log('def');
    function def(){
    console.log('abcd');
    }
    def();
    return sample;
  }
  
  var holding=abcd();
  console.log('I am Dilip')
  console.log(holding())
  var variable1='abcd'
  var variable2=function(){
    console.log('Morning')
  }
  var variable3=function (){} //anonimous
  console.log(variable3)
//   variable1()
//   variable2()
//   variable3()
