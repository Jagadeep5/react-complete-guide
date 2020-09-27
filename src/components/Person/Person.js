import React, { Component } from 'react';
import classes from '../Person/Person.module.css'
import Radium from 'radium';
import LoginContext from '../../context/loginContext';

class person extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    static contextType = LoginContext; // this can only be used in class based components.This will populate the react object "context" with Login context properties

    styles = { float: 'right', width: '20px', cursor: "pointer", border: '1px solid' };
    classList = [classes.person, 'borderColor'].join(' ');
    //Here borderColor is a global one. it wont be converted to hash value.. where as person class will be converted into unique hash valiue

    componentDidMount() {
        // this.RefEl.focus();
        this.inputRef.current.focus();
    }
    //This will execute when ever there is a change in the props property. Thsi is very useful
    shouldComponentUpdate(nxtProps, nxtState) {
        // if(nxtProps.name !== this.props.name || this.props.isAuthenticated){
        //     return true;
        // }
        // else{
        //     return false;
        // }
        return true;
    }
    getSnapshotBeforeUpdate() {
        return { "SomeData": "Somedata value" }
    }

    componentDidUpdate(prevProp, Prevstate, snapshot) {
        console.log("Componet got updated");
        console.log(snapshot);

    }

    render() {
        console.log("4. child from person got called");
        return (
            <div className={this.classList} onClick={this.props.click} style={this.props.sty}>
                <span onClick={this.props.delete} style={this.styles}>X</span>
                {/* <LoginContext.Consumer>
                    {
                        (cntxt) => {
                            return (<p>{cntxt.authentication ? "Hello Jagadeep!!" : "Please log in"}</p>)
                        }
                    }
                </LoginContext.Consumer> */}
                <p>{this.context.authentication ? "Hello "+ this.props.name :  "Please log in"}</p>

                <p>I'm {this.props.name} and my age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text"
                    // ref={(inputRef) => this.RefEl = inputRef }
                    ref={this.inputRef}
                    onChange={this.props.change}
                    value={this.props.name} />
            </div>

        )
    }

}

export default Radium(person);