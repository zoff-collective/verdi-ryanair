import css from 'styled-jsx/css';

import { colors, fonts } from '../../tokens';

export default css`
  h2 {
    display: inline-block;
    font-family: ${fonts.novel.family.black};
    margin-bottom: 0;
    margin-top: 0;
    position: relative;
  }

  span {
    position: relative;
    z-index: 2;
  }

  h2:before {
    background-color: ${colors.yellow};
    bottom: -2.5%;
    content: '';
    left: -10px;
    position: absolute;
    height: 50%;
    width: calc(100% + 20px);
  }
`;
