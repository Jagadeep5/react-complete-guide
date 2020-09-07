import React  from 'react';
import styled from 'styled-components';


const subHeading = (Props) => {
    const Styledh2 = styled.h2`
     {
         color: ${p => p.colr === true? 'red': 'green'};
         display: inline-block;
     }
    `
    return (
        <div>
            <Styledh2 colr={ Props.changeColor } >This is {Props.title}</Styledh2>
            <input type="checkbox" onChange={ Props.changeColorFun } />
        </div>
    )
}


export default subHeading;