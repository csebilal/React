import { useState } from 'react';
 //all code re-render callback or more about state code in all
function init(){
  console.log ("init was excuted");
  return Math.random();
}
export default function Counter(){
  let[count, setCount]= useState(init());//initiatization 
  //console.log("component is rendered");
  //console.log(`count=${count}`);

   let incCount = () => {
    setCount ((currCount) =>{
     return currCount + 1
    });
   // setCount(count + 1 );
    //console.log(` this incCount , count=${count}`);
   // setCount ((currCount) =>{
    //  return currCount + 1
   // });
   };
   return (
    <div>
        <h3>Count={count}</h3>
        <button onClick={incCount}> increase count</button>
    </div>
   )

}