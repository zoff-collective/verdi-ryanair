import css from 'styled-jsx/css';

import { colors, fonts } from '../../tokens';

export default css`
  footer {
    background-color: ${colors.yellow};
    color: ${colors.blue};
    padding-bottom: 3rem;
    padding-top: 3rem;
    position: relative;
  }

  .logo {
    bottom: -60%;
    height: 15rem;
    position: absolute;
    right: 0;
    width: 15rem;
  }

  .title {
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 1.9rem;
    line-height: 1.2;
    margin: 0 auto;
    max-width: 14rem;
    text-align: center;
    transform: rotate(-15deg);
  }
`;
