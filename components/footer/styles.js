import css from 'styled-jsx/css';

import { colors, fonts, mq } from '../../tokens';

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
    bottom: -7rem;
    height: 8rem;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 8rem;
  }

  @media ${mq.tablet} {
    .logo {
      bottom: -8.5rem;
      height: 15rem;
      left: auto;
      transform: none;
      right: 3.5rem;
      width: 15rem;
    }
  }

  .title {
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 1.9rem;
    line-height: 1.2;
    margin: 0 auto;
    max-width: 14rem;
    text-align: center;
    transform: rotate(-10deg);
  }

  nav {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 12rem;
    padding-bottom: 5rem;
  }

  @media ${mq.tablet} {
    nav {
      flex-direction: row;
      justify-content: space-around;
    }
  }

  a {
    color: ${colors.blue};
    font-family: ${fonts.novel.family.black};
    font-size: 1.2rem;
    text-decoration: none;
  }

  @media ${mq.tablet} {
    a {
      font-size: 1.8rem;
    }
  }
`;
