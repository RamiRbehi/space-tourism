import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import logo from "../assets/shared/logo.svg";
import { mobile, tablet } from "../Responsive";
import close from "../assets/shared/icon-close.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";

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

    ${tablet({
   paddingTop:"0",
   marginLeft:"0"
})}

${mobile({
    // display:"none"
    marginLeft: "0",
    left: "30px",
    top: "20px"
})}
`

const Left = styled.div`
    flex: 3;
`
const Logo = styled.img`
    float: left;

    ${mobile({
    // marginRight: "150px"
  })}
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

    ${tablet({
    display:"none"
})}

${mobile({
    display:"none"
})}
`

const Right = styled.div`
    flex: 4;
    background-color: rgba(255,255,255,0.1);
    backdrop-filter: blur(9px);
    align-content: flex-start;
    

    ${mobile({
    position: "absolute",
    right: "0",
    width: "0",
    height: "100vh",
    transition: "all 0.5s ease-in-out",
    overflow: "hidden"
    })}
    

    &.navigation-menu.expanded{
        ${mobile({
            width: "250px"
        })}
    }
`
const NavLink = styled.a`
    display: inline-block;
    justify-content: center;
    text-align: center;
    width: 9em;
    cursor: pointer;
    letter-spacing: 1.5px;
    
    ${tablet({
        width:"7em" 
    })}

${mobile({
    display: "flex",
    justifyContent: "start",
    width: "100%",
    textAlign: "start",
    marginLeft: "20px"
})}
`
const Span = styled.span`
    margin-right: 1em;
    font-weight: 600;

    ${tablet({
   display: "none"
})}

${mobile({
    display: "block",
    textAlign: "start"
})}
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


    ${tablet({
   fontSize: "14px" 
})}

    ${mobile({
        marginTop: "80px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "30px"
    })}
`
const ResponsiveButton = styled.div`
    ${mobile({
    // marginRight: "20px",
    // marginTop: "15px",
    position: "absolute",
    // left: "120px"
    right: "20px",
    top: "20px",
    zIndex: "1"
  })}
`
const Close = styled.button`
    display: none;
    width: 25px;
    height: 25px;
    background: url(${close});
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    cursor: pointer;

    ${mobile({
        display: "block"
    })}
`
const Hamburger = styled.button`
    display: none;
    width: 25px;
    height: 25px;
    background: url(${hamburger});
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    cursor: pointer;

    ${mobile({
        display: "block"
    })}
`

const none = {
    textDecoration: 'inherit',
    color: 'inherit' 
}

const Navbar = () => {

    const [clicked, setClicked] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
        setMenuVisible(!menuVisible);
    }

    const handleClickBack = () => {
        setClicked(!clicked);
        setMenuVisible(!menuVisible)
    }

  return (
    <Container>
            <Left>
                <Link to="/">
                <Logo src={logo} alt="logo"></Logo>
                </Link>
            <Hr />
            </Left>
                <ResponsiveButton>
                    {clicked ? (
                        <Close onClick={handleClickBack}/>
                    ) : (
                        <Hamburger onClick={handleClick}/>
                    )}
                </ResponsiveButton>
            <Right className={`navigation-menu  ${menuVisible && 'expanded'}`}>
                <Nav>
                    <Link to="/" style={none}>
                    <NavLink><Span>00</Span> Home</NavLink>
                    </Link>
                    <Link to="/destinations" style={none}>
                    <NavLink><Span>01</Span> Destination</NavLink>
                    </Link>
                    <Link to="/crew" style={none}>
                    <NavLink><Span>02</Span> Crew</NavLink>
                    </Link>
                    <Link to="/technologies" style={none}>
                    <NavLink><Span>04</Span> Technology</NavLink>
                    </Link>
                </Nav>
            </Right>
    </Container>
  )
}

export default Navbar