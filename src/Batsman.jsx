import { useState } from "react"

export default function BatsMan(){
    const [runs, setRuns] = useState (0)
    const [sixes, setsixes] = useState (0)
    const handleSingle = () => {
        const updatedRuns = runs + 1
        setRuns (updatedRuns);
    }
    const handleFour = () =>{
        const updatedRuns2 = runs + 4;
        setRuns (updatedRuns2)
    } 
    const handlesix = () => {
        const updatedRuns = runs + 6;
        const updatedsixes = sixes + 1;
        setsixes (updatedsixes)
        setRuns (updatedRuns)
    }
    
    return (
        <div>
            <h3>player: Bangladesh BatsMan</h3>
            <p><small>six: {sixes}</small></p>
            {
               runs > 50 && <p>Your Score:50+</p> 
            }
            <h1>Score:{runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handlesix}>Six</button>
        </div>
    )
}