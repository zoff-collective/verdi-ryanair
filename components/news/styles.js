import css from 'styled-jsx/css';

import { colors, fonts, textMaxWidth } from '../../tokens';

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
    padding-bottom: 3rem;
    padding-top: 2rem;
  }

  .title {
    font-family: ${fonts.novel.family.black};
    font-size: 1.6rem;
    margin-bottom: 0;
    margin-top: 0;
  }

  .date {
    color: red;
    display: block;
    font-family: ${fonts.novel.family.bold};
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .text {
    font-family: ${fonts.novel.family.bold};
    font-size: 1.2rem;
    line-height: 1.45;
    margin-bottom: 2.5rem;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }
`;
