import { useState } from "react"

export default function Counter (){
    const [counter,setcounter]= useState(0);
    const handleAdd = () => {
        const newCounter = counter + 1;
        setcounter (newCounter)
        
    }

    const counterStyle ={
        border: '2px solid yellow',
        
    }
    return(
        <div style={counterStyle}>
            <h3>counter:{counter} </h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}