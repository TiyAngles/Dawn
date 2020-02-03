import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';

import img3 from './static/img1.jpg';
import img1 from './static/img2.png';
import img2 from './static/img3.jpg';

import './reset.css';

function App() {
  return (
    <Wrapper>
      <Header />
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
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 450px;
  width: 450px;
  margin: 0 auto;
  text-align: center;

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
`;

export default App;
