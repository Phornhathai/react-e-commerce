import './slider.css';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from 'react';
import styled from "styled-components";
import { sliderItems } from '../../data';


type props = {
    direction: string,
}

type props_bg = {
    bg: string
}

type prop_wrapper = {
    sliderIndex : number
}


const SliderArrow = styled.div<props>`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "20px"};
    right: ${(props) => props.direction === "right" && "20px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const SliderDiv = styled.div<props_bg>`
width: 100vw; 
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props) => props.bg};
`;

const SliderWrapper = styled.div<prop_wrapper>`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props => props.sliderIndex * -100}vw);
}
`

   


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction: string) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }
    return (
        <div className='slider-container'>
            <SliderArrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </SliderArrow>
            <SliderWrapper sliderIndex={slideIndex}>
                {sliderItems.map((item) => (
                <SliderDiv bg= {item.bg}>
                    <div className="img-container">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="info-container">
                        <h1 className="slider-title">{item.title}</h1>
                        <p className="slider-desc">{item.desc}</p>
                        <button className="slider-button">SHOW NOW</button>
                    </div>
                </SliderDiv>
                ))}
            </SliderWrapper>            
            <SliderArrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </SliderArrow>

        </div >
    )
}

export default Slider
