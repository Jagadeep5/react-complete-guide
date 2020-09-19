import React, { useEffect, useRef } from 'react';
import {Styledh2} from '../ComponentStyles/StyledComponents';


const SubHeading = (Props) => {

    const chkRef = useRef();
    

    useEffect(() => {
        console.log("[Subheadinhg] UseEfffect");
        chkRef.current.click();
        chkRef.current.focus();
    },[]);
   
    return (
        <div>
            <Styledh2 colr={Props.changeColor} >This is {Props.title}</Styledh2>
            <input 
            type="checkbox" 
            ref={chkRef}
            onChange={Props.changeColorFun} />
        </div>
    )
}


export default SubHeading;