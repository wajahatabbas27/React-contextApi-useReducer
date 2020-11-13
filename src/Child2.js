import { useReducer } from "react";
import numberReducer from "./numberReducer";

function Child2() {
    let [num,abc] = useReducer(numberReducer,540);
    return (
    <div>
       Child2 num is {num}
       <br/>
       <button onClick={()=>{abc({type:"INCREMENT",aa:89})}}>+</button>
       <button onClick={()=>{abc({type:"DECREMENT",aa:167})}}>-</button>
    </div>  
    );
  }
  
  export default Child2;
  