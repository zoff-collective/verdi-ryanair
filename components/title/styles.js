import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  header {
    padding-bottom: 4rem;
    padding-top: 4rem;
    text-align: center;
  }

  h1 {
    color: currentColor;
    display: inline-block;
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 3.25rem;
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
