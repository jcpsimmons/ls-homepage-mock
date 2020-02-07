import React, { Component } from 'react'
import Slider from "react-slick";

export default class Hero extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <Slider {...settings}>
                    <div>
                        <a href="#">
                            <img class="img-responsive" src="https://www.livingspaces.com/globalassets/images/home/2020/02/0203_presidentsday_hp_hero_wk1.jpg" /></a>
                    </div>
                    <div> <a href="#">
                        <img class="img-responsive" src="https://www.livingspaces.com/globalassets/images/home/2020/02/0203_revive_presidentsday_hp_hero.jpg" /></a>
                    </div>
                </Slider>
            </div>

        );
    }
}
