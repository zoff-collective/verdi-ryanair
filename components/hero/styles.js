import css from 'styled-jsx/css';

import { colors, fonts, mq } from '../../tokens';

export default css`
  section {
    align-items: center;
    background-color: ${colors.blue};
    color: ${colors.yellow};
    display: flex;
    height: 75vh;
    overflow: hidden;
    position: relative;
    text-align: center;
  }

  @media ${mq.tablet} {
    section {
      height: 88vh;
    }
  }

  .title {
    display: inline-block;
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 4rem;
    line-height: 1;
    margin: 0 auto;
    max-width: 1100px;
    position: relative;
  }

  @media ${mq.tablet} {
    .title {
      font-size: 5rem;
    }
  }

  @media ${mq.desktop} {
    .title {
      font-size: 8.1rem;
    }
  }

  img {
    height: 100%;
    left: 50%;
    min-width: 100%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    width: auto;
  }
`;
