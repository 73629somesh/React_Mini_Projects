import { useState } from "react"
import ludoBoard from "./LudoBoard.css"

export default function LudoBoard() {

    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

    let updateBlue = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 };
        });
    };

    let updateYellow = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow + 1 };
        });
    };

    let updateGreen = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, green: prevMoves.green + 1 };
        });
    };

    let updateRed = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, red: prevMoves.red + 1 };
        });
    };

    return (
        <center><div className="board">
            <center><h1 style={{ backgroundColor: "blueviolet", borderRadius: "5px", border: "2px solid black" }}>Ludo Board</h1>
                <h2 style={{ backgroundColor: "orange", borderRadius: "5px", border: "2px solid black" }}>Game Begins!</h2>
            </center>
            <div >
                <center>
                    <p>Blue moves={moves.blue}</p>
                    <button className="button" style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>
                    <p>Yellow moves = {moves.yellow}</p>
                    <button className="button" style={{ backgroundColor: "yellow", color: "black" }} onClick={updateYellow}>+1</button>
                    <p>Green moves = {moves.green}</p>
                    <button className="button" style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>
                    <p>Red moves = {moves.red}</p>
                    <button className="button" style={{ backgroundColor: "red", color: "black" }} onClick={updateRed}>+1</button>
                </center>
            </div>
        </div></center>

    );
}