import { useState } from "react";

export default function LudoBoard(){
    let [moves, setMove]=useState({blue: 0, yellow: 0, green: 0, red: 0,})

    let updateBlue = ()=>{
    setMove((preMoves) => {
       return {...moves, blue: moves.blue +1};
    });
    };

        let updateYellow = ()=>{
    setMove((preMoves) => {
       return {...moves, yellow: moves.yellow +1};
    });
    };

     let updateGreen = ()=>{
    setMove((preMoves) => {
       return {...moves, green: moves.green +1};
    });
    };
     let updateRed = ()=>{
    setMove((preMoves) => {
       return {...moves, red: moves.red +1};
    });
    };
return(
    <div>
        <p>Game Begins</p>
        <div className="board">
        <p>blue moves ={moves.blue} </p>
        <button style={{backgroundColor:"blue"}}onClick={updateBlue}>+1</button>
        <p>yellow moves ={moves.yellow}</p>
        <button style={{backgroundColor:"yellow", color:"black"}}onClick={updateYellow}>+1 </button>
        <p>green moves ={moves.green} </p>
        <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
        <p>red moves ={moves.red} </p>
        <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
        </div>
    </div>
);
}