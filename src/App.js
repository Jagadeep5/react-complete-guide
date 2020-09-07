import React, { useState } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Sub from './SubHeading/SubHeading'; // importing a default should be capital letter
import Per from './Person/Person';
import styled from 'styled-components';

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

  const logFunc = (data, ind) => {
    // console.log(data,ind, a);
    b({
      ...a,
     ...a.pStyle,
     backgroundColor : a.pStyle.backgroundColor === "white" ? 'lightgreen':'white'
    })
    // console.log(data, a);
  }

  const buttonStyles = {
    width: '200px',
    height: '30px',
    backgroundColor: 'lightblue',
    borderRadius: '8px',
    marginTop: '8px'
  }

  const StyledButton = styled.button`
  {
    width: 200px;
    height: 40px;
    background-color: lightgrey;
    border-radius: 20px;
    margin-top: 8px;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      background-color: salmon;
      boreder: 0px;
    }
  }

  `




  const changeFromInput = (eve, i) => {
    let per = [...a.persons]
    per[i].name = eve.target.value;
    b({
      ...a,
      persons: per
  })
  }

  const deleteCard = (i) => {
    const per = [...a.persons.splice(i,1)];
    console.log(per, a)
    b({
      ...a,
      persons: per
    })
    console.log(per, a)
  }

  const persons = () => {
    return (
      a.showData ?
      a.persons.map((x,i) => {
        return <div>
        <Per 
        key={"person"+i}
        change={ (eve) => changeFromInput(eve, i) } 
        sty={ a.pStyle } 
        name={x.name} 
        age={x.age} 
        click={ logFunc.bind(this, "Clicked using bind", i) }
        delete={ deleteCard.bind(this, i)} />
        
      </div>
      })
       : null
    );
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

  


  return (
    // This is not actual html. this will be conveted to below comented return statement
    <StyleRoot>
    <div className="App">
      <h1> This is my main heading </h1>
      <Sub title={a.subHeading} changeColor={a.changeSubColor} changeColorFun={ (event) => changeSubColorFun(event) } />
      <div>
      <button style={ {...buttonStyles, backgroundColor: a.showData? 'salmon':'lightgreen', color: 'black'} } onClick={ toggelData }> {a.showData?"Hide data":"Show Data"}</button>
      </div>
      { persons() }

      <button style={ buttonStyles } onClick={ changeState.bind({}, ['Deepu', 'Dhoni']) }> Change Data using bind </button>  {/*This is valid way of calling a function on click */}
      <StyledButton onClick={ () => changeState(["Deepu!", "Dhoni!"]) }> Change Data </StyledButton>  {/*This is valid way of calling a function on click */}
      {/* <button onClick={ changeState(["Deepu!", "Dhoni!"]) }> Change Data </button> // This is not a valid way of calling a function on click */}
    </div>
    </StyleRoot>
  );

  // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'This is another type 1'))
}

export default Radium(App);
