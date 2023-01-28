import styled from "styled-components"
import bghomeDesktop from "../images/background-home-desktop.jpg"


const Container = styled.div`
width: 100%;
height: 100vh;
background: url(${bghomeDesktop});
`

const HomeComponent = () => {
  return (
    <Container>
        test
    </Container>
  )
}

export default HomeComponent