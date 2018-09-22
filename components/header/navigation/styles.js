import css from 'styled-jsx/css';

import { colors, fonts, mq } from '../../../tokens';

export default css`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    margin-bottom: 0;
    margin-left: 0;
    margin-top: 0.45rem;
    padding-left: 0;
  }

  @media ${mq.phone} {
    ul {
      margin-left: 3.25rem;
    }
  }

  @media ${mq.tablet} {
    ul {
      align-items: center;
      justify-content: center;
      margin-left: 5rem;
      margin-top: 0;
    }
  }

  @media ${mq.dektop} {
    ul {
      margin-left: 14rem;
    }
  }

  li + li {
    margin-left: 1rem;
  }

  @media ${mq.tablet} {
    li + li {
      margin-left: 1rem;
    }
  }

  @media ${mq.desktop} {
    li + li {
      margin-left: 3rem;
    }
  }

  a,
  span {
    color: currentColor;
    font-family: ${fonts.novel.family.black};
    font-size: 1.15rem;
    line-height: 1;
    text-decoration: none;
  }

  @media ${mq.tablet} {
    a,
    span {
      font-size: 1.3rem;
    }
  }

  @media ${mq.desktop} {
    a,
    span {
      font-size: 1.9rem;
    }
  }

  span {
    border-bottom: 2px solid ${colors.blue};
  }

  @media ${mq.tablet} {
    span {
      border-bottom-width: 5px;
    }
  }
`;
