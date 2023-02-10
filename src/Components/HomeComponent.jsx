import styled from "styled-components"
import bgHomeDesktop from "../assets/home/background-home-desktop.jpg"
import bgHomeTablet from "../assets/home/background-home-tablet.jpg"
import bgHomeMobile from "../assets/home/background-home-mobile.jpg"
import { mobile, tablet } from "../Responsive"


const Container = styled.div`
width: 100%;
height: 100vh;
position: relative;
background: url(${bgHomeDesktop});
background-size: cover;
display: flex;


  ${tablet({
    background: `url(${bgHomeTablet})`,
    backgroundSize: "cover",
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center",
    gap:"150px",
    height: "100vh",
    width: "100%"
  })}

  ${mobile({
    background: `url(${bgHomeMobile})`,
    backgroundSize: "cover",
    height: "100vh",
    gap: "50px"
  })}
`
const TitleContainer = styled.div`
  align-self: flex-end;
  padding: 0;
  margin: 0 0 100px 130px;
  text-align: start;
  width: 560px;

  ${tablet({
    margin: "0",
    padding:"0",
    alignSelf: "center",
    textAlign: "center"
  })}

  ${mobile({
    // paddingTop: "100px",
    width: "350px"
  })}
`
const Title5 = styled.h5`
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 4.75px;
  text-transform: uppercase;

  ${mobile({
    fontSize: "24px"
  })}
`
const Title1 = styled.h1`
  font-size: 150px;
  color: #fff;
  margin: 20px 0;
  padding: 0;
  font-family: 'Bellefair', serif;
  font-weight: 300;
  text-transform: uppercase;

  ${mobile({
    fontSize: "72px",
  })}
`
const Description = styled.p`
  color: #fff;
  margin: 0 0px;
  padding: 0 120px 0 0;
  font-size: 16px;
  line-height: 1.5;
  text-align: justify;

  ${tablet({
    padding:"0",
    textAlign:"center"
  })}
`
const ExploreButton = styled.button`
  position: relative;
  color: #0B0D17;
  background-color: #fff;
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
  text-transform: uppercase;
  transition: box-shadow 0.4s ease-in-out;
  -webkit-transition: box-shadow 0.4s ease-in-out;
  -moz-transition: box-shadow 0.4s ease-in-out;

  &:hover{
    box-shadow: 0 0 0 50px rgba(208,214,249,0.3);
  }

  ${tablet({
    margin: "0",
    alignSelf: "center"
  })}

${mobile({
    alignSelf: "center",
    margin: "0",
    // marginBottom: "50px"
  })}
`

const HomeComponent = () => {
  return (
    <Container>
      <TitleContainer>
        <Title5>So, you want to travel</Title5>
        <Title1>Space</Title1>
        <Description>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</Description>
      </TitleContainer>

        <ExploreButton>
          Explore
        </ExploreButton>

    </Container>
  )
}

export default HomeComponent