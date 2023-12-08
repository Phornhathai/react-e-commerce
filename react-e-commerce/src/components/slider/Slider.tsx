import './slider.css';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

type props = {
    direction : string,
}


const SliderArrow = styled.div`
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
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Slider = () => {
    return (
        <div className='slider-container'>
            <SliderArrow >
                <ArrowLeftOutlined />
            </SliderArrow>
            <div className="slider-wrapper">
                <div className="slider">
                    <div className="img-container">
                        <img src="" alt="" />
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
            <SliderArrow>
                <ArrowRightOutlined />
            </SliderArrow>
        </div>
    )
}

export default Slider
