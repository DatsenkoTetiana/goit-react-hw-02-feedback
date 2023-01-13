import styled from 'styled-components';
export const Button = styled.button`
  font-weight: 600;
  margin: 20px;
  border-radius: 5px;
  padding: 10px 10px;
    transition-duration: 300ms;
  cursor: pointer;
  box-shadow: '0 4px 4px rgba(0, 0, 0, .25)';
  &:nth-child(2){
    :hover,
    :focus{
      background-color: green;
        transform: scale(1.1);
    }
  }
   &:nth-child(3){
    :hover,
    :focus{
      background-color: yellow;
        transform: scale(1.1);
    }
  }
   &:nth-child(4){
    :hover,
    :focus{
      background-color: red;
        transform: scale(1.1);
  }
}
`;
