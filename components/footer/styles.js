import css from 'styled-jsx/css';

import { colors, fonts } from '../../tokens';

export default css`
  .inner {
    background-color: ${colors.yellow};
    color: ${colors.blue};
    padding-bottom: 2rem;
    padding-top: 2rem;
    position: relative;
    width: 100%;
  }

  .logo {
    bottom: -8.5rem;
    height: 15rem;
    position: absolute;
    right: 3.5rem;
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

  nav {
    display: flex;
    justify-content: space-around;
    margin-top: 12rem;
    padding-bottom: 5rem;
  }

  a {
    color: ${colors.blue};
    font-family: ${fonts.novel.family.black};
    font-size: 1.8rem;
    text-decoration: none;
  }
`;
