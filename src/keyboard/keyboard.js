import React from 'react';

function Keyboard({ handleKeyboardClick }) {
    return (
        <>
            <div className="qToP">
                <button className="key" id="Q" onClick={() => handleKeyboardClick("Q")}>Q</button>
                <button className="key" id="W" onClick={() => handleKeyboardClick("W")}>W</button>
                <button className="key" id="E" onClick={() => handleKeyboardClick("E")}>E</button>
                <button className="key" id="R" onClick={() => handleKeyboardClick("R")}>R</button>
                <button className="key" id="T" onClick={() => handleKeyboardClick("T")}>T</button>
                <button className="key" id="Y" onClick={() => handleKeyboardClick("Y")}>Y</button>
                <button className="key" id="U" onClick={() => handleKeyboardClick("U")}>U</button>
                <button className="key" id="I" onClick={() => handleKeyboardClick("I")}>I</button>
                <button className="key" id="O" onClick={() => handleKeyboardClick("O")}>O</button>
                <button className="key" id="P" onClick={() => handleKeyboardClick("P")}>P</button>
            </div>
            <div className="aToL">
                <button className="key" id="A" onClick={() => handleKeyboardClick("A")}>A</button>
                <button className="key" id="S" onClick={() => handleKeyboardClick("S")}>S</button>
                <button className="key" id="D" onClick={() => handleKeyboardClick("D")}>D</button>
                <button className="key" id="F" onClick={() => handleKeyboardClick("F")}>F</button>
                <button className="key" id="G" onClick={() => handleKeyboardClick("G")}>G</button>
                <button className="key" id="H" onClick={() => handleKeyboardClick("H")}>H</button>
                <button className="key" id="J" onClick={() => handleKeyboardClick("J")}>J</button>
                <button className="key" id="K" onClick={() => handleKeyboardClick("K")}>K</button>
                <button className="key" id="L" onClick={() => handleKeyboardClick("L")}>L</button>
            </div>
            <div className="zToM">
                <button className="key" id="Z" onClick={() => handleKeyboardClick("Z")}>Z</button>
                <button className="key" id="X" onClick={() => handleKeyboardClick("X")}>X</button>
                <button className="key" id="C" onClick={() => handleKeyboardClick("C")}>C</button>
                <button className="key" id="V" onClick={() => handleKeyboardClick("V")}>V</button>
                <button className="key" id="B" onClick={() => handleKeyboardClick("B")}>B</button>
                <button className="key" id="N" onClick={() => handleKeyboardClick("N")}>N</button>
                <button className="key" id="M" onClick={() => handleKeyboardClick("M")}>M</button>
                <button className="key" id="delete" onClick={() => handleKeyboardClick("DLT")}>DLT</button>
            </div>
        </>
    )
}

export default Keyboard;