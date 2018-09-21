import css from 'styled-jsx/css';

import { colors, fonts, textMaxWidth } from '../../tokens';

export default css`
  section {
    background-color: ${colors.blue};
    color: white;
    padding-bottom: 4rem;
    padding-top: 4rem;
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
    margin-top: 4.5rem;
  }

  img {
    border-radius: 50%;
    height: 12rem;
    object-fit: contain;
    width: 12rem;
  }

  .content {
    margin-left: 1.5rem;
    width: 75%;
  }

  blockquote {
    font-family: ${fonts.novel.family.semibold};
    font-size: 1.25rem;
    line-height: 1.2;
    margin: 1rem 0 0 0;
  }

  .title {
    font-family: ${fonts.novel.family.black};
    font-size: 1.6rem;
    margin-bottom: 0;
    margin-top: 0;
  }

  .role {
    font-family: ${fonts.novel.family.semibold};
    font-size: 1rem;
  }
`;
