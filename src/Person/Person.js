import React from 'react';
import '../Person/Person.css'
import Radium from 'radium';

const person = (p) => {

    const styles = {float:'right', width: '20px', cursor: "pointer",border:'1px solid'};
    
    

    return (
        <div className="person" onClick={p.click} style={ p.sty }>
            <span onClick={ p.delete } style={ styles }>X</span>
            <p>I'm {p.name} and my age is {p.age}</p>
            <p>{p.children}</p>
            <input type="text" onChange={p.change} value={p.name} />
        </div>
        
    )
}

export default Radium(person);