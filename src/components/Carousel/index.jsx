import Slider from "react-slick";

import panda from '../../assets/panda.jpg'

import {
    Item,
    Img,
    ItemTitle,
} from './styles'

const Carrossel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Slider
                {...settings}
            >
                <Item>
                    <Img src={panda}/>
                </Item>
                
                
            </Slider>
        </>
    )
}

export default Carrossel