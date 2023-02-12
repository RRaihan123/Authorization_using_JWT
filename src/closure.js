function temp(){
    let counter = 0;
    return function(){
    counter += 1; 
    return counter;
    
    }
  }
  
  var add = temp();
  var c=add()
  c=add()
  c=add()
  console.log(c)
  console.dir(add)
  
  
 
  