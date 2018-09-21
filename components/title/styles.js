import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  header {
    padding-bottom: 2rem;
    padding-top: 3rem;
    text-align: center;
  }

  @media ${mq.tablet} {
    header {
      padding-bottom: 4rem;
      padding-top: 4rem;
    }
  }

  h1 {
    color: currentColor;
    display: inline-block;
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 2.8rem;
    line-height: 1;
    margin: 0;
    text-align: center;
    transform: rotate(-7deg);
  }

  @media ${mq.tablet} {
    h1 {
      font-size: 6.1rem;
      transform: rotate(-10deg);
    }
  }
`;
