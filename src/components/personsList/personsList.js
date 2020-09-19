import React, { useEffect } from 'react'
import Per from '../Person/Person';
import withClassAuxi2 from '../hoc/withClassAuxi2';


const PersonsList = (props) => {
    useEffect(() => {
        console.log("[Personlist] UseEfffect");
        return (() => {
            alert("Data will be hidden");
            console.log("[Personlist] UseEfffect Clean up called"); // Thsis will be called when ever this componet got clearedf from dom.
        })
    },[]);
    return (
    props.state.persons.map((x,i) => {
        return <div key={"person"+i}>
        <Per 
        change={ (eve) => props.change(eve, i) } 
        sty={ props.state.pStyle } 
        name={x.name} 
        age={x.age} 
        delete={ () => props.delete(i)}/>
        
      </div>
      })
)}


export default withClassAuxi2(PersonsList,"");