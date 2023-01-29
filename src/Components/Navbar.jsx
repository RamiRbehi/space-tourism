import styled from "styled-components"
import logo from "../images/logo.svg";

const Container = styled.div`
    height: 60px;
    display: flex;
    position: absolute;
    padding-top: 20px;
    margin-left: 10px;
    z-index: 1;
    top: 10px;
    right: 0;
    left: 50px;
    bottom: 20px;
`

const Left = styled.div`
    flex: 3;
`
const Logo = styled.img`
    float: left;
`

const Hr = styled.hr`
    /* flex: 2; */
    background: rgba(255,255,255,0.5);
    height: 1px;
    border: 0;
    /* margin: 0 300px; */
    width: 35vw;
    position: absolute;
    top: 40px;
    right: 500px;
    left: 0;
    z-index: 2;
`

const Right = styled.div`
    flex: 4;
    background-color: rgba(255,255,255,0.1);
    backdrop-filter: blur(9px);
    
`
const Li = styled.li`
    display: inline-block;
    justify-content: center;
    text-align: center;
    width: 9em;
    cursor: pointer;
`
const Span = styled.span`
    margin-right: 1em;
    font-weight: 600;
`
const Ul = styled.ul`
    list-style: none;
    text-transform: uppercase;
    color: #fff;
    font-size: 16px;
    justify-content: space-between;
    
    ${Li}::after{
        content: "";
        position: absolute;
        width: 0%;
        height: 2px;
        display: block;
        transition: all 0.3s ease;
        bottom: 1%;
    }

    ${Li}:hover::after{
        width: 17%;
        height: 2px;
        background-color: rgba(255,255,255,0.5);
    }

    ${Li}:active::after{
        background-color: #fff;
    }
`



const Navbar = () => {
  return (
    <Container>
            <Left>
                <Logo src={logo}></Logo>
            <Hr />
            </Left>
            <Right>
                <Ul>
                    <Li><Span>00</Span> Home</Li>
                    <Li><Span>01</Span> Destination</Li>
                    <Li><Span>02</Span> Crew</Li>
                    <Li><Span>04</Span> Technology</Li>
                </Ul>
            </Right>
    </Container>
  )
}

export default Navbar