import React from 'react';

import styled from 'styled-components'
import './footer.css'
const StyledFooterDiv = styled.div`
  color: white;
  height:70px;
  width:100%;
  position:relative;
  padding-left:10px;
  display:flex;
  flex-shrink : 0;
  background-color:#557A95;
  text-align: left;
`;
const Footer = () => {
    return (
        <StyledFooterDiv className="align-items-center">
            Built with Gatsby JS, React, Bootstrap -- 
            <a href="https://github.com/hughes72">
                <span style={{color:'white',fontSize:40}} className="fa fa-github"></span>
            </a>
        </StyledFooterDiv>
    )
}

export default Footer