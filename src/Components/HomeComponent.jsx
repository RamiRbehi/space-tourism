import styled from "styled-components"
import bghomeDesktop from "../images/background-home-desktop.jpg"


const Container = styled.div`
width: 100%;
height: 100vh;
background: url(${bghomeDesktop});
display: flex;
`
const TitleContainer = styled.div`
  align-self: flex-end;
  padding: 0;
  margin: 0 0 100px 100px;
  text-align: start;
  width: 560px;
`
const Title5 = styled.h5`
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 4.75px;
`
const Title1 = styled.h1`
  font-size: 150px;
  color: #fff;
  margin: 20px 0;
  padding: 0;
  font-family: 'Bellefair', serif;
  font-weight: 300;
`
const Description = styled.p`
  color: #fff;
  margin: 0 0px;
  padding: 0 120px 0 0;
  font-size: 16px;
  line-height: 1.5;
  text-align: justify;
`
const ExploreButton = styled.button`
  color: #0B0D17;
  font-family: 'Bellefair', serif;
  font-size: 28px;
  letter-spacing: 1.75px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: none #fff;
  align-self: flex-end;
  margin: 0 0 100px 300px;
  cursor: pointer;

  /* &:hover{
    box-shadow: 0 0 0 50px #fff;
  } */

`

const HomeComponent = () => {
  return (
    <Container>
      <TitleContainer>
        <Title5>SO, YOU WANT TO TRAVEL TO</Title5>
        <Title1>SPACE</Title1>
        <Description>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</Description>
      </TitleContainer>

        <ExploreButton>
          EXPLORE
        </ExploreButton>

    </Container>
  )
}

export default HomeComponent