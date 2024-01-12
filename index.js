
var result=document.getElementById("result");

function display(number){
  result.value+=number;
  
}

function calculate(){
  //  var final_number=result.value;
  //  console.log(result.value);
  try{
   var res=eval(result.value);
   if(res>Math.floor(res)) res=res.toFixed(8);
   if(res==Infinity) {
    result.style.fontSize='20px';
    result.value=`can't divided by zero`;
  }
   else result.value=res;
  }
  catch(err){
    result.style.fontSize='17px';
    result.value="please enter the valid input ";
  }
   
}

function clr(){
  result.value='';
  result.style.fontSize='40px';
}

function del()
{
  result.value=result.value.slice(0,-1);
}