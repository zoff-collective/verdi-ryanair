import css from 'styled-jsx/css';

import { colors, fonts, mq, textMaxWidth } from '../../tokens';

export default css`
  section {
    background-color: ${colors.blue};
    padding-bottom: 2rem;
    padding-top: 2rem;
  }

  @media ${mq.tablet} {
    section {
      padding-bottom: 4rem;
      padding-top: 4rem;
    }
  }

  ul {
    list-style: none;
    max-width: ${textMaxWidth};
    margin: 0 auto;
    padding-left: 0;
  }

  li + li {
    margin-top: 2rem;
  }

  @media ${mq.tablet} {
    li + li {
      margin-top: 0;
    }
  }

  .title {
    color: white;
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 2.8rem;
    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
  }

  @media ${mq.tablet} {
    .title {
      font-size: 4.4rem;
    }
  }

  p {
    color: white;
    display: flex;
    flex-direction: column;
    font-family: ${fonts.novel.family.black};
    font-size: 1.4rem;
    line-height: 1.2;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media ${mq.tablet} {
    p {
      flex-direction: row;
      font-size: 1.8rem;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .number {
    color: ${colors.yellow};
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 3rem;
    margin-bottom: 0.25rem;
  }

  @media ${mq.tablet} {
    .number {
      font-size: 4rem;
      margin-bottom: 0;
      margin-right: 2rem;
    }
  }
`;
