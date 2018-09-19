import css from 'styled-jsx/css';

import { colors, fonts, textMaxWidth } from '../../tokens';

export default css`
  section {
    background-color: ${colors.yellow};
    color: ${colors.blue};
    padding-bottom: 8rem;
    padding-top: 8rem;
  }

  blockquote {
    font-family: ${fonts.novel.family.black};
    font-size: 3rem;
    line-height: 1.45;
    margin: 0 auto;
    max-width: ${textMaxWidth};
    text-align: center;
  }
`;
