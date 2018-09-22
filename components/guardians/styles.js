import css from 'styled-jsx/css';

import { colors, fonts, textMaxWidth } from '../../tokens';

export default css`
  section {
    background-color: ${colors.blue};
    color: white;
    padding-bottom: 6rem;
    padding-top: 6rem;
  }

  ol {
    list-style: none;
    margin: 0 auto;
    max-width: ${textMaxWidth};
    padding-left: 0;
  }

  li {
    display: flex;
    flex-direction: row;
  }

  li + li {
    margin-top: 4rem;
  }

  img {
    border-radius: 50%;
    display: block;
    height: 13.5rem;
    object-fit: contain;
    width: 13.5rem;
  }

  .content {
    margin-left: 3rem;
  }

  blockquote {
    font-family: ${fonts.novel.family.semibold};
    font-size: 1.45rem;
    line-height: 1.45;
    margin: 2rem 0 0 0;
  }

  .title {
    font-family: ${fonts.novel.family.black};
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  .role {
    font-family: ${fonts.novel.family.semibold};
    font-size: 1rem;
  }
`;
