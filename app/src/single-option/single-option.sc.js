import styled, { css } from 'styled-components';

import PseudoBtn from '../pseudo-btn/pseudo-btn';

const OptionWrapper = styled(PseudoBtn)`
  outline: none;
`

const Option = styled.label`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 8px;
  margin: 0;
  color: #000;
  transition: background 0.3s ease;
  cursor: pointer;
  user-select: none;

  ${({ height }) => height && css`
    height: ${height}px; 
  `}

  & input {
    display: none;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  ${({ isChecked }) => isChecked && css`
    background: rgba(0, 0, 0, 0.2);
  `}
`

export {
  OptionWrapper,
  Option,
}