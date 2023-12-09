import './slider.css';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

type props = {
    direction : string,
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
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Slider = () => {
    return (
        <div className='slider-container'>
            <SliderArrow direction="left">
                <ArrowLeftOutlined />
            </SliderArrow>
            <div className="slider-wrapper">
                <div className="slider">
                    <div className="img-container">
                        <img src="https://images.pexels.com/photos/4464822/pexels-photo-4464822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                    <div className="info-container">
                        <div className="slider-title">

                        </div>
                        <div className="slider-desc">

                        </div>
                        <div className="slider-button">

                        </div>
                    </div>
                </div>
            </div>
            <SliderArrow direction="right">
                <ArrowRightOutlined />
            </SliderArrow>
        </div>
    )
}

export default Slider
