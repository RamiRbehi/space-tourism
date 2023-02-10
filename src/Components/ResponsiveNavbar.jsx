import styled from "styled-components"
import { mobile } from "../Responsive"

    const ResponsiveLinkNav = styled.div`
        /* display: none; */
        cursor: pointer;
        width: 70%;
        height: 100vh;
        background-color: rgba(255,255,255,0.1);
        backdrop-filter: blur(9px);
        position: relative;
        float: right;
        ${mobile({
            display: "grid",
            flexFlow: "column"
        })}
    `
    const ButtonNav = styled.a`
    
    `

const ResponsiveNavbar = () => {
  return (
    <ResponsiveLinkNav>
        <ButtonNav>Home</ButtonNav>
        <ButtonNav>Destination</ButtonNav>
        <ButtonNav>Crew</ButtonNav>
        <ButtonNav>Technologies</ButtonNav>
    </ResponsiveLinkNav>
  )
}

export default ResponsiveNavbar