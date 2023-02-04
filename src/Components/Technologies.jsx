import { useState } from "react"
import styled from "styled-components"
import { technologies } from "../Data"
import bgTechnologyDesktop from "../images/background-technology-desktop.jpg"
import Navbar from "./Navbar"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${bgTechnologyDesktop});
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
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
    display: flex;
    height: 60vh;
    text-align: start;
    transform: translateX(${(props) => props.slideTech * -100}vw);
    transition: all 2s ease;
`
const Slider = styled.div`
    width: 100vw;
    height: 100%;
`

const ButtonContainer = styled.div`
    position: absolute;
    top: 62%;
    right: 77%;
    transform: translate(-90%, -50%);
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-right: 50px;
    z-index: 1;
`
const Button = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: solid 1px rgba(208,214,249,0.3);
    color: #fff;
    background-color: transparent;
    font-family: 'Bellefair', serif;
    font-size: 24px;
    cursor: pointer;

    :hover{
        border: solid 1px #fff;
    }

    :active{
        background-color: #fff;
        color: #0B0D17;
    }
`

const TechInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: left;
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-90%, -30%);
`
const Subheading = styled.span`
  color: rgba(255,255,255,0.8);
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`
const TechnologyTitle = styled.h3`
  color: #fff;
  font-size: 56px;
  margin: 20px 0;
  padding: 0;
  font-family: 'Bellefair', serif;
  font-weight: 300;
  text-transform: uppercase;
`
const Description = styled.p`
  width: 25vw;
  color: #fff;
  padding-right: 100px;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 50px;
`

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: right;
    position: relative;
`
const TechnologyImage = styled.img`
    width: 30%;
    float: right;
    position: absolute;
    top: 50px;
`


const Technologies = () => {

    const [slideTech, setSlideTech] = useState(-1);
    
    const handleClick = (index) => {
        setSlideTech(index);
    };

  return (
    <Container>
        <Navbar/>
        <Heading><Span>03</Span>space launch 101</Heading> 
            <ButtonContainer>
                <Button onClick={() => handleClick(-1)}>1</Button>
                <Button onClick={() => handleClick(0)}>2</Button>
                <Button onClick={() => handleClick(1)}>3</Button>
            </ButtonContainer> 
        {technologies.map((technology, i) => (
            <Wrapper technology={technology} key={technology.i} slideTech={slideTech}>
                <Slider>
            <TechInfo>
                <Subheading>the terminomogy...</Subheading>
                <TechnologyTitle>{technology.name}</TechnologyTitle>
                <Description>{technology.description}</Description>
            </TechInfo>
            <ImageContainer>
                <TechnologyImage src={technology.image} alt={technology.name}></TechnologyImage>
            </ImageContainer>
                </Slider>
        </Wrapper>
            ))}
    </Container>
  )
}

export default Technologies