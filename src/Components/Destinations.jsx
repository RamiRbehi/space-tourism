import styled from "styled-components"
import Navbar from "./Navbar"
import bgDestinationDesktop from "../images/background-destination-desktop.jpg"
import { DestinationInfo } from "../Data"
import { useState } from "react"


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${bgDestinationDesktop});
    align-items: center;
    justify-content: center;
`
const HeadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Heading = styled.h5`
    font-size: 28px;
    font-weight: 400;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transform: translate(20%, 100%);
    flex: 1;
`
const Span = styled.span`
    margin-right: 1em;
    color: rgba(208,214,249,0.5);
`
const DestLink = styled.a`
    display: inline-block;
    justify-content: center;
    text-align: start;
    width: 5em;
    cursor: pointer;
    letter-spacing: 1.5px;
`
const DestNamecontainer = styled.div`
    flex: 1;
    width: calc(100% - 50vw);
    margin-top: 200px;
    padding-bottom: 20px;
    list-style: none;
    text-transform: uppercase;
    color: #fff;
    font-size: 16px;
    justify-content: space-between;
    z-index: 1;

    ${DestLink}::after{
        content: "";
        position: absolute;
        width: 0%;
        height: 2px;
        display: block;
        transition: all 0.3s ease;
        bottom: 64%;
    }
    
    ${DestLink}:hover::after{
        width: 4%;
        height: 2px;
        background-color: rgba(255,255,255,0.5);
    }

    ${DestLink}:active::after{
        background-color: #fff;
    }
`
const Wrapper = styled.div`
    height: calc(100% - 40vh);
    display: flex;
`
const Slide = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const DestImage = styled.img`
    width: 50%;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: start;
    color: #fff;
`

const DestInfoContainer = styled.div`
    width: 80%;
    font-family: 'Bellefair', serif;
`
const DestName = styled.h2`
  font-size: 100px;
  margin: 20px 0;
  padding: 0;
  font-weight: 300;
  text-transform: uppercase;
  
`
const DestInfo = styled.p`
  padding-right: 100px;
  font-size: 16px;
  line-height: 1.5;
  text-align: justify;
  margin-bottom: 50px;
  font-family: 'Barlow Condensed', sans-serif;
`
const Hr = styled.hr`
    background: rgba(255,255,255,0.5);
    height: 1px;
    border: 0;
    width: 35vw;
    opacity: .5;
    position: relative;
    right: 30px;
`
const FurtherInfo = styled.div`
    display: flex;
    justify-content: start;
    text-align: left;
`
const DistanceContainer = styled.div`
    width: 50%;
`
const TimeContainer = styled.div`
    width: 50%;
`
const InfoTitle = styled.h5`
    display: inline-block;
    justify-content: center;
    text-align: start;
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
`
const Info = styled.p`
    font-size: 28px;
    margin-top: 10px;
    text-transform: uppercase;
`

const Destinations = () => {

    const [destination] = useState(DestinationInfo);
    
    const [value, setValue] = useState(0);

    const {image, name, description, distance, travel} = destination[value];

  return (
    <Container>
       <Navbar/>
       <HeadingContainer>
        <Heading><Span>01</Span>Pick your destination</Heading>
       <DestNamecontainer>
           {destination.map((item, index)=>(
           <DestLink 
           item={item} key={item.id}
            onClick={() => setValue(index)}   
           >{item.name}
           </DestLink>
           ))}
       </DestNamecontainer>
       </HeadingContainer>
        <Wrapper>
            <Slide>
            <Left>
                <DestImage src={image} alt={name}></DestImage>
            </Left>
            <Right>
                <DestInfoContainer>
                      <DestName>{name}</DestName>
                         <DestInfo>{description}</DestInfo>
                       <Hr/>
                       <FurtherInfo>
                           <DistanceContainer>
                               <InfoTitle>Avg. distance</InfoTitle>
                               <Info>{distance}</Info>
                         </DistanceContainer>
                          <TimeContainer>
                             <InfoTitle>Est. distance time</InfoTitle>
                                <Info>{travel}</Info>
                            </TimeContainer>
                        </FurtherInfo>
                    </DestInfoContainer>
            </Right>
            </Slide>
        </Wrapper>
    </Container>
    
  )

}

export default Destinations