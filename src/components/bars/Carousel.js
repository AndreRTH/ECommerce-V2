import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div >
                    <img src="https://mensgear.b-cdn.net/wp-content/uploads/2022/05/Bespoke-Post-Review.jpeg" />
                    <p className="legend">Image 1</p>
                </div>
                <div >
                    <img  src="https://s.hdnux.com/photos/01/16/63/63/20659406/4/rawImage.jpg" />
                    <p className="legend">Image 2</p>
                </div>
                <div >
                    <img  src="https://siblingswithstyleboh.files.wordpress.com/2017/06/bespoke-post-weekender-box-2.jpg" />
                    <p className="legend">Image 3</p>
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;