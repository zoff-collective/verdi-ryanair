import css from 'styled-jsx/css';

import { colors, fonts, mq, textMaxWidth } from '../../tokens';

export default css`
  section {
    color: ${colors.blue};
  }

  ol {
    list-style: none;
  }

  li {
    border-top: 7px solid ${colors.yellow};
    margin: 0 auto;
    max-width: ${textMaxWidth};
    padding: 2rem 1.5rem 3rem 1.5rem;
  }

  @media ${mq.tablet} {
    li {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .title {
    font-family: ${fonts.novel.family.black};
    font-size: 1.4rem;
    line-height: 1.2;
    margin-bottom: 0;
    margin-top: 0;
  }

  @media ${mq.tablet} {
    .title {
      font-size: 1.8rem;
    }
  }

  .date {
    color: red;
    display: block;
    font-family: ${fonts.novel.family.bold};
    font-size: 1rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  @media ${mq.tablet} {
    .date {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
  }

  .text {
    font-family: ${fonts.novel.family.bold};
    font-size: 1rem;
    line-height: 1.45;
    margin-bottom: 1.5rem;
  }

  @media ${mq.tablet} {
    .text {
      font-size: 1.4rem;
      margin-bottom: 2.5rem;
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
  }
`;
