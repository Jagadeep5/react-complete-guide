import React, { useEffect, Component, PureComponent } from 'react';
import classes from '../ComponentStyles/ComponentStyles.module.css';
import {StyledButton} from '../ComponentStyles/StyledComponents';
import Auxi from '../hoc/Auxi';



class TailButtons extends PureComponent {
  
  componentDidMount(){
    console.log("[Tailbuttons] componentDIDMounted");
  }
  componentDidUpdate(){
    console.log("[Tailbuttons] componetDIDupdated");
  }
render(){
  return (
    <Auxi>
        <button 
        className={ classes.buttonStyles } 
        onClick={ this.props.changeUsingBind }> Change Data using bind </button>  {/*This is valid way of calling a function on click */}
        
        <StyledButton onClick={ () => this.props.changeData(["Deepu!", "Dhoni!"]) }> Change Data </StyledButton>  {/*This is valid way of calling a function on click */}
      {/* <button onClick={ changeState(["Deepu!", "Dhoni!"]) }> Change Data </button> // This is not a valid way of calling a function on click */}
    </Auxi>
)
}


}

export default TailButtons;