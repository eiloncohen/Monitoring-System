
import styled from "styled-components";
import "./css/Navbar.css";
import icon from "../img/logo.png";


const Container = styled.div`
  background-color: #000000;
  padding: 10px;
  text-align: center;
  position: sticky;
  top: 0px;
  overflow: hidden;
  z-index: 1;
  height: 90px;
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  overflow-x: hidden;
  align-items: center;
  justify-content: space-between;
  
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  display: flex;
  padding: 0px 10px;
  
  width: 200px;
  height: 50px;
  object-fit: cover;
`;

const Center = styled.div`
  align-items: center;
  display: flex;
  flex: 2;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
  font-size: 250%;
`;
const Right = styled.div`
  flex:1;
  text-align: right;
  overflow: hidden;
`;


const Button = styled.button`
  color: #fff;
  box-shadow: 0 0 40px 40px black inset, 0 0 0 0 black;
  transition: all 150ms ease-in-out;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid;
  border-color: #1d958d;
  border-radius: 0.6em;
  color: white;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-weight: 700;
`

const Navbar = (props) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src={icon} alt="logo" style={{"width":"40%","height":"30%"}}/>
        </Left>
        <Center>
          <Logo>{props.title}</Logo>
        </Center>
        <Right>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;