import css from 'styled-jsx/css';

import { colors, fonts, mq } from '../../tokens';

export default css`
  h2 {
    box-decoration-break: clone;
    box-shadow: inset 0px -18px ${colors.yellow};
    display: inline;
    font-family: ${fonts.novel.family.black};
    font-size: 1.75rem;
    line-height: 1.1;
    margin-bottom: 0;
    margin-left: -0.5rem;
    margin-top: 1.25rem;
    padding-left: 0.5rem;
    padding-right: 0.05rem;
    position: relative;
  }

  @media ${mq.tablet} {
    h2 {
      box-shadow: inset 0px -20px ${colors.yellow};
      font-size: 2rem;
      margin-left: -0.75rem;
      padding-left: 0.75rem;
      padding-right: 0.25rem;
    }
  }
`;
