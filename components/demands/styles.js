import css from 'styled-jsx/css';

import { colors, fonts, mq } from '../../tokens';

export default css`
  section {
    background-color: ${colors.yellow};
    color: ${colors.blue};
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    padding-bottom: 4rem;
    padding-top: 2rem;
    width: 100%;
  }

  @media ${mq.tablet} {
    section {
      padding-bottom: 6rem;
      padding-top: 6rem;
    }
  }

  .content {
    display: inline-block;
    transform: rotate(-3deg);
  }

  @media ${mq.tablet} {
    .content {
      transform: rotate(-10deg);
    }
  }

  .title {
    display: inline-block;
    font-family: ${fonts.novel.family.extraBlack};
    font-size: 2.8rem;
    line-height: 1;
    margin: 0 2.5rem 1.5rem 2.5rem;
    max-width: 100%;
  }

  @media ${mq.tablet} {
    .title {
      font-size: 6.1rem;
    }
  }

  .group-title {
    font-family: ${fonts.novel.family.ultraBlack};
    font-size: 1.3rem;
    line-height: 1.45;
    margin-bottom: 0;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    .group-title {
      font-size: 2rem;
      margin-top: 0.25rem;
    }
  }

  .demand-text {
    font-family: ${fonts.novel.family.bold};
    font-size: 1.3rem;
    line-height: 1.45;
    margin-bottom: 0;
    margin-top: 0;
    padding-right: 0.5rem;
  }

  @media ${mq.phone} {
    .demand-text {
      font-size: 1.4rem;
    }
  }

  @media ${mq.tablet} {
    .demand-text {
      font-size: 1.55rem;
      padding-right: 0;
    }
  }

  .list {
    list-style: none;
    margin-left: 3rem;
    margin-top: 0;
    padding-left: 0;
  }

  @media ${mq.tablet} {
    .list {
      margin-left: 14rem;
    }
  }
`;
