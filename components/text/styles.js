import css from 'styled-jsx/css';

import { colors, fonts, mq, textMaxWidth } from '../../tokens';

export default css`
  article {
    color: ${colors.blue};
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  @media ${mq.tablet} {
    article {
      margin-left: 0;
      margin-right: 0;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    font-family: ${fonts.novel.family.semibold};
    font-feature-settings: normal;
    font-variant-ligatures: contextual;
    font-size: 1.15rem;
    line-height: 1.45;
    margin-left: auto;
    margin-right: auto;
    max-width: ${textMaxWidth};
    padding-bottom: 4rem;
  }

  @media ${mq.tablet} {
    .content {
      font-size: 1.45rem;
      line-height: 1.5;
    }
  }
`;
