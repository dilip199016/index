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
  
