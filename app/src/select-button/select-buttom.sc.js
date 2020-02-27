import styled, { css } from 'styled-components';

import PseudoBtn from '../pseudo-btn/pseudo-btn';

const ButtonWrapper = styled(PseudoBtn)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 0 8px 0 14px;
  color: #000;
  border: 1px solid #72777b;
  border-radius: 3px;
  outline: none;
  transition: border 0.2s ease;
  cursor: pointer;
  user-select: none;

  &:not(.disabled):hover {
    border-color: #1aac50;
  }

  ${({ isOpened }) => isOpened && css`
    border-color: #1aac50;
  `}

  ${({ isError }) => isError && css`
    border-color: #da304c;
  `}

  ${({ isDisabled }) => isDisabled && css`
    background-color: #e0e0e0;
    cursor: default;

    .text {
      color: #72777b;
    }
  `}
`

const ButtonText = styled.div`
  padding-right: 20px;
  font-size: 1rem;
`

const ButtonIcon = styled.div`
  display: flex;
  transform: rotate(0deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ${({ isOpened }) => isOpened && css`
    transform: rotate(180deg);
  `}
`

export {
  ButtonWrapper,
  ButtonText,
  ButtonIcon,
}