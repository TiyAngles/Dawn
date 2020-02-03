import React, { Component } from 'react';
import styled from 'styled-components';

export default class Footer extends Component {
  render() {
    return (
      <FooterBlock>
        <p>문의하기</p>
        <p>상담하기</p>
        <ul>
          <li>이용약관</li>
          <li>개인정보 처리방침</li>
        </ul>
        <h2>추가 기업정보</h2>
        <h3>주소 : 상호명 : 대표 :</h3>
      </FooterBlock>
    );
  }
}

const FooterBlock = styled.footer`
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
