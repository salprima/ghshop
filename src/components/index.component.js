import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

export default class IndexPage extends Component {

    render() {
        return (

            <Carousel>

                {/* ID  */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://dummyimage.com/800x400/cce5ff/004085.png&text=Selamat+Datang"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{color:'#004085'}}>
                        <h3>Halo Teman!</h3>
                        <p>Selamat belanja di website kami :)</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* EN */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://dummyimage.com/800x400/fff3cd/856404.png&text=Welcome"
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{color:'#856404'}}>
                        <h3>Hello Friends!</h3>
                        <p>Happy shopping in our website :)</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* BG */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://dummyimage.com/800x400/d4edda/155724.png&text=Добре+дошли"
                        alt="Third slide"
                    />
                    <Carousel.Caption style={{color:'#155724'}}>
                        <h3>Здравейте приятели!</h3>
                        <p>Честито пазаруване в нашия уебсайт :)</p>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>

        );
    }

}