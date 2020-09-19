import React, { useState } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import PersonsList from '../components/personsList/personsList';  // importing a default should be capital letter
// import styled from 'styled-components';
import Cockpit from '../components/cockpit/cockpit';
import Tailbuttons from '../components/tailbuttons/tailbuttons';

// a component should always return JSX. 
function App() {


  // useState always returns an arry with 2 elements. 1 is state and 2 is change state fiunction. 
  // All react hooks start with word use.
  const [a, b] = useState({
    persons:[
      {name: 'Jagadeep', age: '28'},
      {name: 'Deepu', age: '28.4'}
    ],
    subHeading: 'Sub Heading from initial state',
    pStyle: {
      backgroundColor: 'white',
      ':hover': {
        backgroundColor: 'black',
        color: 'white'
    },
    '@media (min-width: 500px)':{
      width: '400px'
    }
    },
    showData: false,
    changeSubColor: false
  });

  const changeState = (name) => {
    b({
      ...a,
      ...a.persons,
      persons: [
        {name: name[0], age: '28'},
        {name: name[1], age: '28.4'}
      ]
  })
  };

  const changeFromInput = (eve, i) => {
    let per = [...a.persons]
    per[i].name = eve.target.value;
    b({
      ...a,
      persons: per
  })
  }

  const deleteCard = (i) => {
    const per = [...a.persons];
    per.splice(i,1);
    b({
      ...a,
      persons: per
    })
  }

  const toggelData = () => {
    b({
      ...a,
      ...a.showData,
      showData: !a.showData
    })
  }

  const changeSubColorFun = (event) => {
    b({
      ...a, changeSubColor: !a.changeSubColor
    })
  }

  const persons = () => {
    return (
      a.showData ?
      <PersonsList change={ changeFromInput } delete={ (i) => deleteCard(i) } state={ a } />
       : null
    );
  }

  return (
    // This is not actual html. this will be conveted to below comented return statement
    <StyleRoot>
      <div className="App">
        <Cockpit state={a} changeColorFun={changeSubColorFun} toggelData={toggelData}>
        This is using functional component.
        </Cockpit>
        {persons()}
        <Tailbuttons changeUsingBind={ changeState.bind(this, ["Deepu", "Dhoni"])} 
        changeData={ (data) => changeState(data)} />
      </div>
    </StyleRoot>
  );

  // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'This is another type 1'))
}

export default Radium(App);
