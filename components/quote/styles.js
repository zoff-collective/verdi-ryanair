import css from 'styled-jsx/css';

import { colors, fonts, mq, textMaxWidth } from '../../tokens';

export default css`
  section {
    background-color: ${colors.yellow};
    color: ${colors.blue};
    padding: 6rem 1.5rem;
  }

  @media ${mq.tablet} {
    section {
      padding: 5rem 0;
    }
  }

  blockquote {
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 2rem;
    line-height: 1.25;
    margin: 0 auto;
    max-width: ${textMaxWidth};
    text-align: center;
  }

  @media ${mq.tablet} {
    blockquote {
      font-size: 2.7rem;
      line-height: 1.45;
    }
  }
`;
