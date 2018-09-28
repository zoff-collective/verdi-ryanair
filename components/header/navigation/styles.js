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

  .item {
    color: currentColor;
    font-family: ${fonts.novel.family.black};
    font-size: 1.15rem;
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;
  }

  @media ${mq.tablet} {
    .item {
      font-size: 1.3rem;
      position: relative;
      top: 0.25rem;
    }
  }

  @media ${mq.desktop} {
    .item {
      font-size: 1.9rem;
    }
  }

  .item:hover,
  .item:focus,
  span.item {
    border-bottom: 2px solid ${colors.blue};
  }

  @media ${mq.tablet} {
    .item:hover,
    .item:focus,
    span.item {
      border-bottom-width: 5px;
    }
  }

  .visually-hidden {
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
  }

  .social-icon {
    color: ${colors.blue};
    height: 1.75rem;
    margin-left: 1rem;
    position: relative;
    top: -0.25rem;
    width: 1.75rem;
  }

  @media ${mq.tablet} {
    .social-icon {
      height: 2rem;
      margin-left: 2rem;
      position: relative;
      top: 0.25rem;
      width: 2rem;
    }
  }

  @media ${mq.tablet} {
    .social-icon {
      height: 2.75rem;
      width: 2.75rem;
    }
  }
`;
