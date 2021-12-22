import React from 'react'
import PropTypes from 'prop-types'
import styled,{keyframes}from "styled-components";


function StyleComponent({imgUrl= "https://i.ya-webdesign.com/images/fan-blades-png.png"}) {

// Create the keyframes
const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

  const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 1s linear infinite;
`;
  return (
    <div className="text-center">
        <Rotate>
        <img src={imgUrl} alt="Fan" />
        </Rotate>

    </div>
  )
}



StyleComponent.propTypes = {
  imgUrl: PropTypes.string
}

export default StyleComponent
