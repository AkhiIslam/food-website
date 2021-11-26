import React from 'react';
import img1 from '../Slider/image/1.jpg'
import img2 from '../Slider/image/2.jpg'
import img3 from '../Slider/image/3.jpg'

import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: '600px' }}
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ color: 'white' }}>
                        <h4>Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '600px' }}
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{ color: 'white' }}>
                        <h4>The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their unique metabolisms, often evolved to fill a specific ecological niche within specific geographical contexts.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '600px' }}
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{ color: 'white' }}>
                        <h4>Omnivorous humans are highly adaptable and have adapted to obtain food in many different ecosystems. Historically, humans secured food through two main methods: hunting and gathering and agriculture. </h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;