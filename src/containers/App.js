import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import PersonsList from '../components/personsList/personsList';  // importing a default should be capital letter
// import styled from 'styled-components';
import Cockpit from '../components/cockpit/cockpit';
import Tailbuttons from '../components/tailbuttons/tailbuttons';
import Auxi from '../components/hoc/Auxi';
import WithClassAuxi from '../components/hoc/WithClassAuxi';
import LoginContext from '../context/loginContext';
import axios from 'axios';
import ServerData from '../components/ServerData/ServerData';

// a component should always return JSX. 
class App extends Component {
  constructor(props) {
    super(props)
    console.log("1. Constructor got called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps got called");
    return state
  }
  componentDidMount() {
    console.log("5. componentDidMount got called");
    this.getUserDetails();
  }

  getUserDetails = () => {
    axios.get("getuserdetails")
    .then((x) => {
      console.log(x);
      this.setState({
        ...this.state,
        userDetails: x.data
      })
    })
  }

  // useState always returns an arry with 2 elements. 1 is state and 2 is change state fiunction. 
  // All react hooks start with word use.

  state = {
    persons: [
      { name: 'Jagadeep', age: '28' },
      { name: 'Deepu', age: '28.4' }
    ],
    subHeading: 'Sub Heading from initial state',
    pStyle: {
      backgroundColor: 'white',
      ':hover': {
        backgroundColor: 'black',
        color: 'white'
      },
      '@media (min-width: 500px)': {
        width: '400px'
      }
    },
    userDetails:[],
    showData: false,
    changeSubColor: false,
    authenticated: false
  }

  changeState = (name) => {
    this.setState({
      ...this.state,
      ...this.state.persons,
      persons: [
        { name: name[0], age: '28' },
        { name: name[1], age: '28.4' }
      ]
    })
  };

  changeFromInput = (eve, i) => {
    let per = [...this.state.persons]
    per[i].name = eve.target.value;
    this.setState({
      ...this.state,
      persons: per
    })
  }

  deleteCard = (i) => {
    const per = [...this.state.persons];
    per.splice(i, 1);
    this.setState({
      ...this.state,
      persons: per
    })
  }

  toggelData = () => {
    this.setState({
      ...this.state,
      ...this.state.showData,
      showData: !this.state.showData
    })
  }

  changeSubColorFun = (event) => {
    this.setState((prevState, props) => {
      return {
        ...this.state, changeSubColor: !prevState.changeSubColor
      }

    })
  }

  login = () => {
    this.setState((prevState,props) => {
      return {
        ...this.state,
        authenticated: !prevState.authenticated
      }
    })

  }

  persons = () => {
    return (
      this.state.showData ?
        <PersonsList isAuthenticated={this.state.authenticated} change={this.changeFromInput} delete={(i) => this.deleteCard(i)} state={this.state} />
        : null
    );
  }

  

  render() {
    console.log("3. render got called");
    return (
      // This is not actual html. this will be conveted to below comented return statement
      <StyleRoot>
        <WithClassAuxi className="App">
          <LoginContext.Provider value={{authentication: this.state.authenticated, login: this.login}}>
            <Cockpit
              state={this.state}
              changeColorFun={this.changeSubColorFun}
              toggelData={this.toggelData} >This is main heading from app.js
            </Cockpit>
            {this.persons()}
          </LoginContext.Provider>
          <Tailbuttons changeUsingBind={this.changeState.bind(this, ["Deepu", "Dhoni"])}
            changeData={(data) => this.changeState(data)} />
            <ServerData userDetails={this.state.userDetails} userDetailsChanged={this.getUserDetails}></ServerData>
        </WithClassAuxi>
      </StyleRoot>
    );

    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'This is another type 1'))
  }

}

{/* 
component life cycle (Creation....): These are applicable only for class based components
constructor()
getDerivedStateFromProps(props, state)
render()
//// Renders child components
ComponentDidMount() --> 

Updation...(Props)
getDerivedStateFromProps(props, state)
shouldComponetUpdate(nextProps, nextState)
render()
///updates child compoents
//getSnapShotBeforeUpdate
componetDidUpdate() ---> these are the places where we fetch data from server

useEffect is a lifecyc;le hook for componetDidMount and componetDidUpdate


*/}

export default Radium(App);


