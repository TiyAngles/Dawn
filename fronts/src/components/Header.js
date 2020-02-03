import React, { Component } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import img3 from '..//static/img1.jpg';
import img1 from '../static/img2.png';
import img2 from '../static/img3.jpg';

import styled from 'styled-components';

export default class Header extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <HeaderBlock>
        <div class="header-nav">
          <h1>logo</h1>
          <div class="icon">
            <div class="search-icon">search</div>
            <div class="ham-icon">ham</div>
          </div>
        </div>
        <Slider {...settings}>
          <div>
            <h3>
              <img src={img1} alt="logo1" />
            </h3>
          </div>
          <div>
            <img src={img2} alt="logo2" />
          </div>
          <div>
            <img src={img3} alt="logo3" />
          </div>
        </Slider>
      </HeaderBlock>
    );
  }
}

const HeaderBlock = styled.header`
  header {
    widows: 100%;
    height: 200px;
    line-height: 100px;
  }
  .header-nav {
    width: 100%;
    height: 60px;

    line-height: 60px;
  }
  .header-nav::after {
    content: '';
    display: block;
    clear: both;
  }
  .header-nav > h1 {
    float: left;
    width: 30%;
  }
  .header-nav > .icon {
    float: right;
  }
  .header-nav > .icon > div {
    float: left;
  }
  .header-nav > .icon .search-icon {
    padding: 0 5px;
  }
  .header-nav > .icon .ham-icon {
    margin-left: 10px;
    padding: 0 10px;
  }
`;
