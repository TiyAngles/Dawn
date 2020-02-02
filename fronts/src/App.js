import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import img3 from './static/img1.jpg';
import img1 from './static/img2.png';
import img2 from './static/img3.jpg';

import './reset.css';

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Wrapper>
      <header>
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
      </header>
      <nav>
        <h2>여행지</h2>
        <div class="theme">theme</div>
        <div class="area">area</div>
        <div class="season">season</div>
      </nav>
      <section>
        <div class="theme-slide">
          <img src={img1} alt="logo1" />
        </div>
        <div class="area-slide">
          <img src={img2} alt="logo2" />
        </div>
        <div class="season-slide">
          <img src={img3} alt="logo3" />
        </div>
      </section>
      <footer>
        <p>문의하기</p>
        <p>상담하기</p>
        <ul>
          <li>이용약관</li>
          <li>개인정보 처리방침</li>
        </ul>
        <h2>추가 기업정보</h2>
        <h3>주소 : 상호명 : 대표 :</h3>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 450px;
  width: 450px;
  margin: 0 auto;
  text-align: center;

  header {
    width: 100%;
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
  nav {
    width: 100%;
    padding: 30px 0;
  }
  nav > .theme {
    width: 100%;
    height: 60px;
    line-height: 60px;
    margin-top: 10px;
  }
  nav > .area {
    width: 100%;
    height: 60px;
    line-height: 60px;
    margin-top: 10px;
  }
  nav > .season {
    width: 100%;
    height: 60px;
    line-height: 60px;
    margin-top: 10px;
  }
  section > .theme-slide {
    width: 100%;
    padding: 50px 0;
  }
  section > .area-slide {
    width: 100%;
    padding: 50px 0;
  }
  section > .season-slide {
    width: 100%;
    padding: 50px 0;
  }
  footer {
  }
  footer::after {
    content: '';
    display: block;
    clear: both;
  }
  footer > p:nth-child(1) {
    float: left;
    width: 42%;
    margin: 20px 0 0 30px;
  }
  footer > p:nth-child(2) {
    float: right;
    width: 42%;
    margin: 20px 30px 0 0;
  }
  footer > ul {
    width: 100%;
  }
  footer > ul li {
    display: inline-block;
    margin-top: 10px;
  }
  footer > h2 {
    margin-top: 10px;
  }
  footer > h3 {
    margin-top: 10px;
    padding-bottom: 20px;
  }
`;

export default App;
