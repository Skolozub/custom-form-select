import styled, { keyframes } from 'styled-components';

import ScrollWrapper from '../scroll-wrapper/scroll-wrapper';

const openAnimation = keyframes`
  from {
    height: 0;
  }
`

const OptionsWrapper = styled(ScrollWrapper)`
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #1aac50;
  border-top: none;
  border-radius: 0 0 3px 3px;
  animation: ${openAnimation} 0.2s linear;
`

export {
  OptionsWrapper,
}