import Sub from '../SubHeading/SubHeading';
import React, { useEffect, useContext } from 'react';
import classes from '../ComponentStyles/ComponentStyles.module.css';
import LoginContext from '../../context/loginContext';
const Cockpit = (props) => { 
    console.log("4. [Cockpit]child component Render got called");
    useEffect(() => {
        console.log("[Cockpit] componentDIDMounted");
    },[]);

    const loginCntxt = useContext(LoginContext);
    
    return(
    <div>
        <h1> { props.children } </h1>
        <Sub
            title={props.state.subHeading}
            changeColor={props.state.changeSubColor}
            changeColorFun={props.changeColorFun } />
        <div>
            <button className={ classes.buttonStyles } style={{backgroundColor: props.state.showData ? 'salmon' : 'lightgreen', color: 'black' }} onClick={ props.toggelData }> {props.state.showData ? "Hide data" : "Show Data"}</button>
            {/* <LoginContext.Consumer>
                {
                    (cntxt) => {
                        return (
                            <button className={ classes.buttonStyles } style={{backgroundColor: cntxt.authentication ? 'salmon' : 'lightgreen', color: 'black' }} onClick={cntxt.login}>{cntxt.authentication?"Log Out": "Log In"}</button>
                        )
                    }
                }
            </LoginContext.Consumer> */}
            <button className={ classes.buttonStyles } style={{backgroundColor: LoginContext.authentication ? 'salmon' : 'lightgreen', color: 'black' }} onClick={loginCntxt.login}>{loginCntxt.authentication?"Log Out": "Log In"}</button>
            
        </div>
    </div>
)
}

export default React.memo(Cockpit);
//Here memo dont work because, even though if we dont change any input of cocpits, there will eba change in state and we are passing state to this componet.



