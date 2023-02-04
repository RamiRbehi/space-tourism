import { Link } from "react-router-dom";
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
    background: rgba(255,255,255,0.5);
    opacity: .5;
    height: 1px;
    border: 0;
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
const NavLink = styled.a`
    display: inline-block;
    justify-content: center;
    text-align: center;
    width: 9em;
    cursor: pointer;
    letter-spacing: 1.5px;
`
const Span = styled.span`
    margin-right: 1em;
    font-weight: 600;
`
const Nav = styled.div`
    list-style: none;
    text-transform: uppercase;
    color: #fff;
    font-size: 18px;
    margin-top: 17px;
    
    ${NavLink}::after{
        content: "";
        position: absolute;
        width: 0%;
        height: 2px;
        display: block;
        transition: all 0.3s ease;
        bottom: 1%;
    }

    ${NavLink}:hover::after{
        width: 22%;
        height: 2px;
        background-color: rgba(255,255,255,0.5);
    }

    ${NavLink}:active::after{
        background-color: #fff;
    }
`



const Navbar = () => {
  return (
    <Container>
            <Left>
                <Link to="/">
                <Logo src={logo} alt="logo"></Logo>
                </Link>
            <Hr />
            </Left>
            <Right>
                <Nav>
                    <Link to="/" style={{ textDecoration: 'inherit', color: 'inherit' }}>
                    <NavLink><Span>00</Span> Home</NavLink>
                    </Link>
                    <Link to="/destinations" style={{ textDecoration: 'inherit', color: 'inherit' }}>
                    <NavLink><Span>01</Span> Destination</NavLink>
                    </Link>
                    <Link to="/crew" style={{ textDecoration: 'inherit', color: 'inherit' }}>
                    <NavLink><Span>02</Span> Crew</NavLink>
                    </Link>
                    <Link to="/technologies" style={{ textDecoration: 'inherit', color: 'inherit' }}>
                    <NavLink><Span>04</Span> Technology</NavLink>
                    </Link>
                </Nav>
            </Right>
    </Container>
  )
}

export default Navbar