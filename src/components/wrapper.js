import styled from 'styled-components';


const Wrapper = styled.div`
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  bottom: 0;
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;

  @media only screen and (max-width: 400px) {
    display: none;
  }
  
`;

export default Wrapper;