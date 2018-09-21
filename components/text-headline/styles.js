import css from 'styled-jsx/css';

import { colors, fonts } from '../../tokens';

export default css`
  h2 {
    box-decoration-break: clone;
    box-shadow: inset 0px -20px ${colors.yellow};
    display: inline;
    font-family: ${fonts.novel.family.black};
    font-size: 2rem;
    line-height: 1.1;
    margin-bottom: 0;
    margin-left: -0.75rem;
    margin-top: 1.25rem;
    padding-left: 0.75rem;
    padding-right: 0.25rem;
    position: relative;
  }

  span {
    position: relative;
    z-index: 2;
  }
`;
