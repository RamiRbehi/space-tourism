import { useState } from "react"
import styled from "styled-components"
import { crewDetails } from "../Data"
import bgCrewDesktop from "../images/background-crew-desktop.jpg"
import Navbar from "./Navbar"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${bgCrewDesktop});
    display: flex;
    overflow: hidden;
`
const Heading = styled.h5`
    font-size: 28px;
    font-weight: 400;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    position: absolute;
    top: 100px;
    left: 140px;
`
const Span = styled.span`
    margin-right: 1em;
    color: rgba(208,214,249,0.5);
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideBio * -100}vw);
    transition: all 1.5s ease;
`
const Silde = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`
const InfoContainer = styled.div`
    flex: 1;
    text-align: start;
    height: 40vh;
    margin: 240px 0 0 140px;
`
const Role = styled.h4`
  color: rgba(255,255,255,0.5);
  font-size: 32px;
  margin: 0;
  padding: 0;
  font-family: 'Bellefair', serif;
  font-weight: 300;
  text-transform: uppercase;
`
const CrewName = styled.h3`
  color: #fff;
  font-size: 56px;
  margin: 20px 0;
  padding: 0;
  font-family: 'Bellefair', serif;
  font-weight: 300;
  text-transform: uppercase;
`
const CrewIntroduction = styled.p`
  width: 25vw;
  color: #fff;
  padding-right: 100px;
  font-size: 16px;
  line-height: 1.5;
  text-align: justify;
  margin-bottom: 50px;
  font-family: 'Barlow Condensed', sans-serif;
`

const ImageContainer = styled.div`
    flex: 1;
    position: relative;
`
const CrewImage = styled.img`
    width: 60%;
    position: absolute;
    left: 25%;
    bottom: 0;
`

const ButtonContainer = styled.div`
    position: absolute;
    top: 580px;
    left: 140px;
`
const Button = styled.button`
    width: 15px;
    height: 15px;
    margin: 0 5px;
    border: none #fff;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.2);
    cursor: pointer;

    :hover{
        background-color: rgba(255,255,255,0.5);
    }

    :active{
        background-color: rgb(255,255,255);
    }
`

const Crew = () => {

    const [slideBio, setSlideBio] = useState(0);
    
    const handleClick = (index) => {
        setSlideBio(index);
    };

  return (
    <Container>
        <Navbar/>
        <Heading><Span>02</Span>meet your crew</Heading>
            {crewDetails.map((crew, i)=>(
        <Wrapper crew={crew} key={crew.i} slideBio={slideBio}>
            <Silde>
                <InfoContainer>
                <Role>{crew.role}</Role>
                <CrewName>{crew.name}</CrewName>
                <CrewIntroduction>{crew.bio}</CrewIntroduction>
            </InfoContainer>
            <ImageContainer>
                <CrewImage src={crew.image} alt={crew.name}></CrewImage>
            </ImageContainer>
            </Silde>
        </Wrapper>
            ))}
            <ButtonContainer>
                <Button onClick={() => handleClick(0)}></Button>
                <Button onClick={() => handleClick(1)}></Button>
                <Button onClick={() => handleClick(2)}></Button>
                <Button onClick={() => handleClick(3)}></Button>
            </ButtonContainer>
    </Container>
  )
}

export default Crew