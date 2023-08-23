// code your solution here
function superbowlWin(array){
 const w = array.find(array => array.result==="W")
   if(w){
    return w.year
   }else {return undefined}

 

} 

