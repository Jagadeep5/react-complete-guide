import styled from 'styled-components';


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
        const StyledButton2 = styled.button`
        {
          width: 100px;
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
        
        const Styledh2 = styled.h2`
        {
            color: ${p => p.colr === true ? 'red' : 'green'};
            display: inline-block;
        }
       `
export {
    StyledButton,
    StyledButton2,
    Styledh2
}