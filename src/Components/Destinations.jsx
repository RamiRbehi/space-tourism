import styled from "styled-components"
import Navbar from "./Navbar"
import bgDestinationDesktop from "../assets/destination/background-destination-desktop.jpg"
import bgDestinationTablet from "../assets/destination/background-destination-tablet.jpg"
import bgDestinationMobile from "../assets/destination/background-destination-mobile.jpg"
import { DestinationInfo } from "../Data"
import { useState } from "react"
import { mobile, tablet } from "../Responsive"


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${bgDestinationDesktop});
    display: flex;
    align-items: center;
    justify-content: center;

    ${tablet({
    background: `url(${bgDestinationTablet})`,
    backgroundSize: "cover",
    flexDirection: "column"
  })}

  ${mobile({
    background: `url(${bgDestinationMobile})`,
    backgroundSize: "cover",
    flexDirection: "column",
    height: "140vh"
  })}
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

    ${tablet({
        top: "60px",
        left: "60px"
  })}

    ${mobile({
        fontSize: "24px"
  })}
`
const Span = styled.span`
    margin-right: 1em;
    color: rgba(208,214,249,0.5);
`
const Wrapper = styled.div`
    height: calc(100% - 40vh);
    display: flex;
    margin-top: 150px;

    ${tablet({
    flexDirection: "column",
    marginTop:"0"
  })}

${mobile({
  })}
`
const Slide = styled.div`
    display: flex;

    ${tablet({
    flexDirection: "column"
  })}

${mobile({
  })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const DestImage = styled.img`
    width: 50%;

    ${tablet({
    width:"40%",
    marginTop: "30px"
  })}
`

const Right = styled.div`
    flex: 1;
    /* display: flex; */
    justify-content: start;
    align-items: center;
    text-align: start;
    color: #fff;

    ${tablet({
    justifyContent: "center",
    textAlign:"center",
  })}
`
const DestLink = styled.a`
    display: inline-block;
    justify-content: center;
    text-align: start;
    width: 5em;
    cursor: pointer;
    letter-spacing: 1.5px;

    ${mobile({
      width: "3em",
      textAlign: "center",
  })}
`
const DestNamecontainer = styled.div`
    flex: 1;
    width: calc(100% - 50vw);
    display: flex;
    margin-top: 10px;
    padding-bottom: 20px;
    gap: 30px;
    list-style: none;
    text-transform: uppercase;
    color: #fff;
    font-size: 16px;
    z-index: 1;

    ${DestLink}::after{
        content: "";
        position: absolute;
        width: 0%;
        height: 2px;
        display: block;
        transition: all 0.3s ease;
        bottom: 62%;
    }
    
    ${DestLink}:hover::after{
        width: 3%;
        height: 2px;
        background-color: rgba(255,255,255,0.5);
    }

    ${DestLink}:active::after{
        background-color: #fff;
    }

    ${tablet({
    justifyContent: "center",
    alignItems:"center",
    width: "100%",
    marginTop:"60px",
    marginLeft: "20px"
  })}

${mobile({
  marginBottom: "0"
  })}
`
const DestInfoContainer = styled.div`
    width: 80%;
    font-family: 'Bellefair', serif;

    ${tablet({
    justifyContent: "center",
    alignItems:"center",
    textAlign:"center",
    width:"100%",
  })}
`
const DestName = styled.h2`
  font-size: 100px;
  margin: 20px 0;
  padding: 0;
  font-weight: 300;
  text-transform: uppercase;
  
  ${tablet({
   margin:"40px 0" 
})}

${mobile({
    fontSize: "62px",
    margin: "10px 0"
  })}
`
const DestInfo = styled.p`
  padding-right: 100px;
  font-size: 16px;
  line-height: 1.5;
  text-align: justify;
  margin-bottom: 50px;
  font-family: 'Barlow Condensed', sans-serif;

  ${tablet({
    paddingRight:"0",
    textAlign:"center",
    width:"80%",
    marginLeft:"50px"
  })}
`
const Hr = styled.hr`
    background: rgba(255,255,255,0.5);
    height: 1px;
    border: 0;
    width: 35vw;
    opacity: .5;
    position: relative;
    right: 30px;

    ${tablet({
    width:"80vw",
    right:"0"
  })}
`
const FurtherInfo = styled.div`
    display: flex;
    justify-content: start;
    text-align: left;

    ${tablet({
    justifyContent:"center",
    textAlign:"center",
    marginTop:"40px"
  })}

${mobile({
  flexDirection: "column",
  gap: "10px"
  })}
`
const DistanceContainer = styled.div`
    flex: 1;
`
const TimeContainer = styled.div`
    flex: 1;
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
        <Heading><Span>01</Span>Pick your destination</Heading>
        <Wrapper>
            <Slide>
            <Left>
                <DestImage src={image} alt={name}></DestImage>
            </Left>
            <Right>
       <DestNamecontainer>
           {destination.map((item, index)=>(
           <DestLink 
           item={item} key={item.id}
            onClick={() => setValue(index)}   
           >{item.name}
           </DestLink>
           ))}
       </DestNamecontainer>
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